from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid

class Role(models.Model):
    roleName = models.CharField(max_length=255)
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    objects = models.Manager()

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Nouvelle relation avec le modèle Role
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True, related_name='users')

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='rental_user_set',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='rental_user_set',
        blank=True
    )

    def __str__(self):
        return self.email

class Contact(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nom = models.CharField(max_length=255)
    postnom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    tel = models.CharField(max_length=20)
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    objects = models.Manager()



class Engine(models.Model):
    marque = models.CharField(max_length=255)
    couleur = models.CharField(max_length=255)
    ref = models.CharField(max_length=255)
    prixLoc = models.FloatField()
    type = models.CharField(max_length=255)
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    objects = models.Manager()

class Appro(models.Model):
    engine = models.ForeignKey(Engine, related_name='appros', on_delete=models.CASCADE)
    qte = models.IntegerField()
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    objects = models.Manager()

class Commande(models.Model):
    user = models.ForeignKey(User, related_name='commandes', on_delete=models.CASCADE)
    refComd = models.CharField(max_length=255)
    duree = models.IntegerField()
    qte = models.IntegerField()
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    objects = models.Manager()

class Payement(models.Model):
    commande = models.ForeignKey(Commande, related_name='payments', on_delete=models.CASCADE)
    montant = models.FloatField()
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    objects = models.Manager()

class EnginLoue(models.Model):
    commande = models.ForeignKey(Commande, related_name='engins_loues', on_delete=models.CASCADE)
    statutLivre = models.BooleanField(default=False)
    statutRetourne = models.BooleanField(default=False)
    dateEnreg = models.DateField(auto_now_add=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    objects = models.Manager()
