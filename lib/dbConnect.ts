import mongoose from "mongoose";

let isConnected = false; // Track connection state

export default async function dbConnect() {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    throw new Error("⚠️ MONGODB_URI is not defined");
  }

  try {
    const db = await mongoose.connect("mongodb+srv://sriharikappera693_db_user:9YI7BtqSUrVpY5rr@cluster0.lv4wy6v.mongodb.net/?appName=Cluster0");
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error);
  }
}
