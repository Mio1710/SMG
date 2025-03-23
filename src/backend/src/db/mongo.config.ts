import mongoose from "mongoose";
import { configEnv } from "../config/env.config";

export const connectMongoDb = async () => {
  try {
    const url = `mongodb://${configEnv.DB.HOST}:${configEnv.DB.PORT}/${configEnv.DB.NAME}`;
    await mongoose.connect(url);
    console.log("Connect mongodb successfully!!");
  } catch (error) {
    console.log("Connect mongodb failed!!", error);
  }
};
