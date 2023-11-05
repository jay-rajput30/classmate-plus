import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

export const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(MONGO_URL);
    if (connected) {
      console.log("connected to database");
    }
  } catch (e) {
    console.error("error connecting to database", e.message);
  }
};
