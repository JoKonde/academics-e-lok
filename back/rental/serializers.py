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
        fields = ['nom', 'postnom', 'prenom', 'tel']

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['roleName']

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
    contact = ContactSerializer()

    class Meta:
        model = User
        fields = ['email', 'password', 'role', 'contact']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def get_role_by_name(self, role_name):
        try:
            # Utilisez 'roleName' au lieu de 'name'
            role = Role.objects.get(roleName=role_name)
            return role
        except Role.DoesNotExist:
            return None

    def validate(self, data):
        # Validation des champs vides pour le contact
        contact_data = data.get('contact', {})
        required_fields = ['nom', 'postnom', 'prenom', 'tel']
        for field in required_fields:
            if not contact_data.get(field):
                raise serializers.ValidationError({field: f"Veuillez remplir tous les champs du contact."})
        
        # Validation email unique
        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({'email': 'Cette adresse email est déjà prise.'})

        # Validation téléphone unique
        if Contact.objects.filter(tel=contact_data.get('tel')).exists():
            raise serializers.ValidationError({'tel': 'Ce numéro de téléphone est déjà pris.'})
        
        return data

    def create(self, validated_data):
        # Extraire les données du contact
        contact_data = validated_data.pop('contact')
        role_name = validated_data.pop('role')
        role = self.get_role_by_name(role_name)

        if not role:
            raise serializers.ValidationError({"role": "Le rôle spécifié n'existe pas."})

        # Générer un username unique
        num = ''.join(secrets.choice('0123456789') for _ in range(10))
        username = f"{contact_data.get('prenom')}{num}"
        validated_data['username'] = username
        validated_data['role'] = role
        
        try:
            with transaction.atomic():
                # Créer l'utilisateur
                user = User.objects.create_user(**validated_data)
                
                # Créer le contact associé
                Contact.objects.create(
                    user=user,
                    **contact_data
                )
                
                return user
        except Exception as e:
            raise serializers.ValidationError({"detail": str(e)})

