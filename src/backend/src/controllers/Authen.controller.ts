import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { configEnv } from "../config/env.config";
import { User } from "../models";
export class AuthenController {
  async login(req: Request, res: Response) {
    try {
      console.log("Login request body: ", req.body);

      // verify user credentials

      const { email, password } = req.body;
      // get user
      const user = await User.findOne({ email });
      console.log("User found: ", user?.password, email, password);
      if (!user) {
        res.status(200).json({
          error: "USER_NOT_FOUND",
          msg: "User not found",
        });
      }

      // // compare password by bcrypt
      const isMatch = await bcrypt.compare(password, user?.password || "");

      // console.log("isMatch: ", isMatch);
      if (!isMatch) {
        res.status(401).json({ msg: "Invalid credentials" });
      }

      // generate token
      const accessSecret = configEnv.AUTH.ACCESS_TOKEN_SECRET;

      const data = {
        id: user?._id,
        email: user?.email,
      };

      // Implement login logic
      res.json({ msg: "Login successful", data, accessSecret });
    } catch (error) {
      console.error("Login error: ", error);
      res.status(500).json({ code: "LOGIN_FALL", msg: error });
    }
  }

  async register(req: Request, res: Response) {
    console.log("register request body: ", req, res);
    // Implement registration logic
    res.send("Registration successful");
  }
}
