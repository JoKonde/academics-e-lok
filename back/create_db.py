import os
import MySQLdb
from django.conf import settings

# Définir les paramètres de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'elok.settings')  # Remplacez 'elok' par le nom de votre projet

def create_database():
    db_settings = settings.DATABASES['default']
    db_name = db_settings['NAME']

    connection = MySQLdb.connect(
        host=db_settings['HOST'],
        user=db_settings['USER'],
        password=db_settings['PASSWORD'],
    )
    cursor = connection.cursor()
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
    cursor.close()
    connection.close()

if __name__ == "__main__":
    import django
    django.setup()
    create_database()
