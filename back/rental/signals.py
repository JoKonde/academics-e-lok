from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.db import connection
from django.conf import settings
from .models import Role, Contact
import random
import string

@receiver(post_migrate)
def create_admin_user_and_roles(sender, **kwargs):
    User = get_user_model()

    # Vérifiez et créez la base de données si elle n'existe pas
    with connection.cursor() as cursor:
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {settings.DATABASES['default']['NAME']}")

    # Créez les rôles s'ils n'existent pas
    roles = ['Admin', 'Preteur', 'Loueur']
    for role_name in roles:
        Role.objects.get_or_create(roleName=role_name)

    # Créez l'utilisateur admin s'il n'existe pas
    if not User.objects.filter(email='falone@gmail.com').exists():
        admin_user = User.objects.create_superuser(
            email='falone@gmail.com',
            username='falone',
            password='123456789'  # Vous pouvez changer le mot de passe
        )

        # Générer des informations de contact aléatoires
        nom = "NYOTA"
        postnom = "NYOTA"
        prenom = "FALONE"
        tel = ''.join(random.choices(string.digits, k=10))

        Contact.objects.create(
            user=admin_user,
            nom=nom,
            postnom=postnom,
            prenom=prenom,
            tel=tel
        )
