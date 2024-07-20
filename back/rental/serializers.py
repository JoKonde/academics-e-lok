from rest_framework import serializers
from .models import User, Contact, Role, Engine, Appro, Commande, Payement, EnginLoue
import secrets
from django.db import transaction
from django.core.exceptions import ValidationError

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engine
        fields = '__all__'

class ApproSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appro
        fields = '__all__'

class CommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commande
        fields = '__all__'

class PayementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payement
        fields = '__all__'

class EnginLoueSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnginLoue
        fields = '__all__'




class UserCreateSerializer(serializers.ModelSerializer):
    role = serializers.ChoiceField(choices=[('preteur', 'Preteur'), ('loueur', 'Loueur')])
    nom = serializers.CharField(max_length=255)
    postnom = serializers.CharField(max_length=255)
    prenom = serializers.CharField(max_length=255)
    tel = serializers.CharField(max_length=20)
    
    class Meta:
        model = User
        fields = ['email', 'password', 'role', 'nom', 'postnom', 'prenom', 'tel']
        extra_kwargs = {
            'password': {'write_only': True},
        }
    
    def validate(self, data):
        # Validation des champs vides
        required_fields = ['nom', 'postnom', 'prenom', 'tel']
        for field in required_fields:
            if not data.get(field):
                raise serializers.ValidationError({field: f"Veuillez remplir tous les champs."})
        
        # Validation email unique
        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({'email': 'Cette adresse email est déjà prise.'})

        # Validation téléphone unique
        if Contact.objects.filter(tel=data['tel']).exists():
            raise serializers.ValidationError({'tel': 'Ce numéro de téléphone est déjà pris.'})
        
        return data

    def create(self, validated_data):
        # Extraire les informations spécifiques
        nom = validated_data.pop('nom')
        postnom = validated_data.pop('postnom')
        prenom = validated_data.pop('prenom')
        tel = validated_data.pop('tel')
        role_name = validated_data.pop('role')
        
        # Générer un username unique
        num = ''.join(secrets.choice('0123456789') for _ in range(10))
        username = f"{prenom}{num}"
        validated_data['username'] = username

        try:
            with transaction.atomic():
                # Créer l'utilisateur
                user = User.objects.create_user(**validated_data)
                
                # Créer le contact associé
                #role = Role.objects.get(role_name=role_name)
                Contact.objects.create(
                    user=user,
                    nom=nom,
                    postnom=postnom,
                    prenom=prenom,
                    tel=tel
                )
                
                return user
        except Role.DoesNotExist:
            raise serializers.ValidationError({"role": "Le rôle spécifié n'existe pas."})
        except Exception as e:
            raise serializers.ValidationError({"detail": str(e)})