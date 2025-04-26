import bcrypt from "bcrypt";
import { User } from "../models";

const saltRounds = 10;
const initDb = async () => {
  try {
    const hashPassword = await bcrypt.hash("123456789", saltRounds); // Replace with actual hashed password
    const user = await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
    });

    console.log("Init admin successfully!", user);
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

initDb();
