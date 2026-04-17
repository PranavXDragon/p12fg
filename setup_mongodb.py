from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime

uri = "mongodb+srv://Pranav:Newway%402007%40@profile.ye4nihv.mongodb.net/?appName=Profile"

client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Access or create the formdb database
    db = client['formdb']
    
    # Access or create the forms collection
    forms_collection = db['forms']
    
    # Create a test document
    test_form = {
        "name": "Test User",
        "email": "test@example.com",
        "phone": "+1234567890",
        "branch": "Computer Science",
        "education": "Bachelor",
        "skills": ["JavaScript", "React", "MongoDB"],
        "createdAt": datetime.now(),
        "updatedAt": datetime.now()
    }
    
    # Insert the test document
    result = forms_collection.insert_one(test_form)
    print(f"✓ Successfully created formdb database and forms collection")
    print(f"✓ Test document inserted with ID: {result.inserted_id}")
    
    # Verify insertion
    count = forms_collection.count_documents({})
    print(f"✓ Total forms in database: {count}")
    
except Exception as e:
    print(f"✗ Error: {e}")

finally:
    client.close()
