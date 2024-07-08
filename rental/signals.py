from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .models import Role, Contact
import random
import string

@receiver(post_migrate)
def create_admin_user_and_roles(sender, **kwargs):
    User = get_user_model()
    
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
        nom = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
        postnom = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
        prenom = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
        tel = ''.join(random.choices(string.digits, k=10))

        Contact.objects.create(
            user=admin_user,
            nom=nom,
            postnom=postnom,
            prenom=prenom,
            tel=tel
        )
