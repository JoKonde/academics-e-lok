from rest_framework import serializers
from .models import User, Contact, Role, Engine, Appro, Commande, Payement, EnginLoue

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
