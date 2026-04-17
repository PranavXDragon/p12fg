import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: Cached = (global as any).mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        maxPoolSize: 10,
        minPoolSize: 2,
      })
      .then((mongoose) => {
        cached.conn = mongoose;
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

(global as any).mongoose = cached;

export default dbConnect;
