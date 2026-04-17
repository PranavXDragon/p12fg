import pymongo
import os

# MongoDB connection string
MONGODB_URI = "mongodb+srv://Pranav:Newway%402007%40@profile.ye4nihv.mongodb.net/formdb?retryWrites=true&w=majority&appName=Profile"

print("🔍 Testing MongoDB Connection with Python...")
print("URI:", MONGODB_URI[:50] + "...")

try:
    # Create MongoDB client
    client = pymongo.MongoClient(MONGODB_URI, serverSelectionTimeoutMS=5000)
    
    # Verify connection
    client.server_info()
    
    print("✅ MongoDB Connection SUCCESSFUL!")
    print("✅ Connected to MongoDB Atlas")
    print("✅ Database is accessible")
    
    # Get database info
    db = client['formdb']
    print("✅ Database 'formdb' ready")
    
    client.close()
    
except Exception as e:
    print(f"❌ MongoDB Connection FAILED!")
    print(f"❌ Error: {str(e)}")
