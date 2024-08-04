from rest_framework import viewsets
from .models import User, Contact, Role, Engine, Appro, Commande, Payement, EnginLoue
from .serializers import (
    UserSerializer, ContactSerializer, RoleSerializer, EngineSerializer,
    ApproSerializer, CommandeSerializer, PayementSerializer, EnginLoueSerializer,UserCreateSerializer
)
from  .auth import CustomTokenObtainPairView
from rest_framework import generics

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserCreateSerializer
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class EngineViewSet(viewsets.ModelViewSet):
    queryset = Engine.objects.all()
    serializer_class = EngineSerializer

class ApproViewSet(viewsets.ModelViewSet):
    queryset = Appro.objects.all()
    serializer_class = ApproSerializer

class CommandeViewSet(viewsets.ModelViewSet):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer

class PayementViewSet(viewsets.ModelViewSet):
    queryset = Payement.objects.all()
    serializer_class = PayementSerializer

class EnginLoueViewSet(viewsets.ModelViewSet):
    queryset = EnginLoue.objects.all()
    serializer_class = EnginLoueSerializer


class CreateUserView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)