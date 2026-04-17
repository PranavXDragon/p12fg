const mongoose = require('mongoose');
const dns = require('dns');

// Configure DNS to prefer IPv4
dns.setDefaultResultOrder('ipv4first');

// Direct MongoDB URI (removed directConnection which is not compatible with SRV)
const MONGODB_URI = 'mongodb+srv://Pranav:Newway%402007%40@profile.ye4nihv.mongodb.net/formdb?retryWrites=true&w=majority&appName=Profile';

console.log('🔍 Testing MongoDB Connection...');
console.log('URI:', MONGODB_URI ? MONGODB_URI.substring(0, 50) + '...' : 'NOT FOUND');

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI, {
    bufferCommands: false,
    maxPoolSize: 10,
    minPoolSize: 2,
  })
  .then(() => {
    console.log('✅ MongoDB Connection SUCCESSFUL!');
    console.log('✅ Connected to:', mongoose.connection.host);
    console.log('✅ Database:', mongoose.connection.name);
    mongoose.disconnect();
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection FAILED!');
    console.error('❌ Error:', error.message);
    process.exit(1);
  });
