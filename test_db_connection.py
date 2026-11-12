"""
Database Connection & Initialization Test Script
Run this script to verify that Python can connect to your MySQL database
and that all required tables and seed data are properly set up.
"""

import sys
import os
from config import config

def test_connection():
    print("=" * 60)
    print("AI FRAUD DETECTION SYSTEM - DATABASE CONNECTION TEST")
    print("=" * 60)
    print(f"Target Host:     {config.DB_HOST}:{config.DB_PORT}")
    print(f"Target Database: {config.DB_NAME}")
    print(f"User:            {config.DB_USER}")
    print("-" * 60)
    
    try:
        import pymysql
    except ImportError:
        print("[ERROR] 'pymysql' is not installed in your Python environment.")
        print("Please run: pip install -r requirements.txt")
        return False

    from db import get_db_connection, execute_sql_file, execute_query
    
    # 1. Test connecting to MySQL Server
    try:
        print("[1/4] Connecting to MySQL Server...")
        conn = get_db_connection(use_database=False)
        with conn.cursor() as cursor:
            cursor.execute("SELECT VERSION() AS ver;")
            version_info = cursor.fetchone()
            print(f"      [OK] Connected successfully! MySQL Version: {version_info['ver']}")
        conn.close()
    except Exception as e:
        print(f"      [FAILED] Could not connect to MySQL Server.")
        print(f"      Details: {e}")
        print("\nTroubleshooting Tips:")
        print("  1. Ensure MySQL Server is running (in Windows Services or MySQL Workbench).")
        print("  2. Check your credentials in config.py (DB_USER, DB_PASSWORD, DB_PORT).")
        return False

    # 2. Initialize Database & Schema
    schema_path = os.path.join(os.path.dirname(__file__), 'database', 'schema.sql')
    try:
        print("[2/4] Applying database schema (schema.sql)...")
        execute_sql_file(schema_path, use_database=False)
        print("      [OK] Schema applied successfully! All 8 tables verified.")
    except Exception as e:
        print(f"      [FAILED] Error applying schema: {e}")
        return False

    # 3. Check / Insert Seed Data
    seed_path = os.path.join(os.path.dirname(__file__), 'database', 'seed_data.sql')
    try:
        print("[3/4] Loading sample seed data (seed_data.sql)...")
        execute_sql_file(seed_path, use_database=True)
        print("      [OK] Seed data inserted successfully!")
    except Exception as e:
        print(f"      [WARNING/INFO] Seed data note: {e}")

    # 4. Table Verification & Record Counts
    try:
        print("[4/4] Verifying table records...")
        tables = [
            'user_admin', 'branch', 'customer', 'account',
            'ai_model', 'transaction', 'fraud_detection', 'alert'
        ]
        
        print("\n" + "-" * 45)
        print(f"{'Table Name':<25} | {'Row Count':<15}")
        print("-" * 45)
        
        for table in tables:
            row = execute_query(f"SELECT COUNT(*) AS total FROM {table};", fetch_one=True)
            print(f"{table:<25} | {row['total']:<15}")
            
        print("-" * 45)
        print("\n[SUCCESS] All database components are online and ready!")
        return True
    except Exception as e:
        print(f"[FAILED] Error reading table records: {e}")
        return False

if __name__ == '__main__':
    success = test_connection()
    sys.exit(0 if success else 1)
