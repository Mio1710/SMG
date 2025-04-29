import bcrypt from "bcrypt";
import { configEnv } from "../config/env.config";
import { connectMongoDb, disconnectMongoDb } from "../db/mongo.config";
import { User } from "../models";

// connect to db
connectMongoDb();

const saltRounds = 10;
const initDb = async () => {
  try {
    const hashPassword = await bcrypt.hash(
      configEnv.DB.ADMIN_PASSWORD,
      saltRounds
    ); // Replace with actual hashed password
    const user = await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
    });

    console.log("Init admin successfully!", user);
    return;
  } catch (error) {
    console.error("Error initializing database:", error);
  } finally {
    disconnectMongoDb();
  }
};

initDb();
