import "dns";
import dns from "dns";
import mongoose from "mongoose";

// Configure DNS to prefer IPv4 BEFORE any connections
dns.setDefaultResultOrder("ipv4first");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global as any;

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.mongoose.conn) {
    return cached.mongoose.conn;
  }

  if (!cached.mongoose.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 2,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
      family: 4,
      retryWrites: true,
      compressors: ["snappy"],
    };

    cached.mongoose.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        console.log("✓ Connected to MongoDB");
        return mongoose;
      })
      .catch((err) => {
        console.error("✗ MongoDB connection error:", err);
        throw err;
      });
  }
  cached.mongoose.conn = await cached.mongoose.promise;
  return cached.mongoose.conn;
}

export default dbConnect;
