from rest_framework import viewsets
from .models import *
from .serializers import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class EnginViewSet(viewsets.ModelViewSet):
    queryset = Engine.objects.all()
    serializer_class = EnginSerializer

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




# Ajouter ces URLs dans rental/urls.py
urlpatterns += [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
