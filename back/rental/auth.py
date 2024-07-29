# auth.py
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Authentification de l'utilisateur
        user = authenticate(username=request.data.get('email'), password=request.data.get('password'))
        
        if user:
            serializer.is_valid(raise_exception=True)
            # Gérer ici la création de tokens, par exemple
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        else:
            return Response({"msg": "Compte non trouvé"}, status=status.HTTP_406_NOT_ACCEPTABLE)
