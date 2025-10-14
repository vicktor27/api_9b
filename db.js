import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    console.log(MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Succesfully!!!!");
  } catch (error) {
    console.error("Mongo DB Connection Failed", error);
  }
};
