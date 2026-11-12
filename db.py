import pymysql
import pymysql.cursors
from config import config

def get_db_connection(use_database=True):
    """
    Establish a connection to the MySQL server.
    
    :param use_database: If True, connects directly to DB_NAME.
                         If False, connects without selecting a DB (used for schema init).
    :return: pymysql connection object
    """
    connection_params = {
        'host': config.DB_HOST,
        'port': config.DB_PORT,
        'user': config.DB_USER,
        'password': config.DB_PASSWORD,
        'charset': config.DB_CHARSET,
        'cursorclass': pymysql.cursors.DictCursor,
        'autocommit': True
    }
    
    if use_database:
        connection_params['database'] = config.DB_NAME
        
    return pymysql.connect(**connection_params)

def execute_query(query, params=None, fetch_all=False, fetch_one=False, commit=False):
    """
    Execute a parameterized SQL query safely.
    
    :param query: SQL statement (using %s placeholders)
    :param params: Tuple or list of parameters
    :param fetch_all: Return all matching rows
    :param fetch_one: Return a single matching row
    :param commit: Explicitly commit transaction (e.g., INSERT, UPDATE, DELETE)
    :return: Rows (dict or list of dicts), or lastrowid / rowcount
    """
    connection = None
    try:
        connection = get_db_connection(use_database=True)
        with connection.cursor() as cursor:
            cursor.execute(query, params or ())
            
            if commit:
                connection.commit()
                return {
                    'last_id': cursor.lastrowid,
                    'row_count': cursor.rowcount
                }
                
            if fetch_one:
                return cursor.fetchone()
                
            if fetch_all:
                return cursor.fetchall()
                
            return None
    finally:
        if connection:
            connection.close()

def execute_sql_file(file_path, use_database=True):
    """
    Execute multiple SQL statements from an SQL script file.
    """
    connection = get_db_connection(use_database=use_database)
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            sql_script = f.read()
        
        # Split statements by semicolon while ignoring comments
        statements = sql_script.split(';')
        with connection.cursor() as cursor:
            for statement in statements:
                stmt = statement.strip()
                if stmt:
                    cursor.execute(stmt)
        connection.commit()
        return True
    finally:
        connection.close()
