import os
from dotenv import load_dotenv

# Load optional .env file if present
load_dotenv()

class Config:
    """Application and Database Configuration Settings."""
    
    # Flask Security
    SECRET_KEY = os.getenv('SECRET_KEY', 'apex-bank-fraud-detection-secret-key-2026')
    
    # MySQL Database Connection Settings
    DB_HOST = os.getenv('DB_HOST', 'localhost')
    DB_PORT = int(os.getenv('DB_PORT', 3306))
    DB_USER = os.getenv('DB_USER', 'root')
    DB_PASSWORD = os.getenv('DB_PASSWORD', 'root')  # Change if your MySQL root password is different
    DB_NAME = os.getenv('DB_NAME', 'fraud_detection_db')
    
    # Connection Charset & Autocommit
    DB_CHARSET = 'utf8mb4'
    
    # ML Model Path
    ML_MODEL_PATH = os.path.join(os.path.dirname(__file__), 'ml', 'fraud_model.joblib')

config = Config()
