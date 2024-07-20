import MySQLdb
from django.conf import settings
import os
import logging

# Créer un logger pour suivre les informations
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Définir les paramètres de Django pour utiliser la configuration de settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'elok.settings')
#creation de la bd
def create_database():
    db_settings = settings.DATABASES['default']
    db_name = db_settings['NAME']

    try:
        connection = MySQLdb.connect(
            host=db_settings['HOST'],
            user=db_settings['USER'],
            password=db_settings['PASSWORD'],
        )
        if connection.open:
            cursor = connection.cursor()
            cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
            logger.info(f"La base de donnée '{db_name}' a été créée ou existe déjà.")
            
    except MySQLdb.Error as e:
        logger.error(f"Erreur de la création de la base de données: {e}")
        
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

if __name__ == "__main__":
    import django
    django.setup()
    create_database()
