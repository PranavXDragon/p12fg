from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://Pranav:Newway%402007%40@profile.ye4nihv.mongodb.net/?appName=Profile"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("✓ Pinged your deployment. You successfully connected to MongoDB!")
    
    # List databases
    databases = client.list_database_names()
    print(f"✓ Databases: {databases}")
    
except Exception as e:
    print(f"✗ Connection failed: {e}")
