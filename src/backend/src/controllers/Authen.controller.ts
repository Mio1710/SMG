import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
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

      if (!isMatch) {
        res.status(401).json({
          error: "INVALID_CREDENTIALS",
          msg: "Invalid credentials",
        });
      }

      const data = {
        id: user?._id,
        email: user?.email,
      };
      // generate token
      const accessSecret = configEnv.AUTH.ACCESS_TOKEN_SECRET;
      const accessToken = jwt.sign(data, accessSecret, {
        expiresIn: configEnv.AUTH.ACCESS_TOKEN_LIFETIME,
      });

      // Implement login logic
      res.json({ msg: "Login successful", data, accessToken });
    } catch (error) {
      console.error("Login error: ", error);
      res.status(500).json({ code: "LOGIN_FALL", msg: error });
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Verify the token
      const decoded = jwt.verify(token, configEnv.AUTH.ACCESS_TOKEN_SECRET);
      if (!decoded || typeof decoded === "string") {
        return res.status(401).json({ error: "Invalid token" });
      }

      // Generate a new token
      const newAccessToken = jwt.sign(
        { id: (decoded as any).id, email: (decoded as any).email },
        configEnv.AUTH.ACCESS_TOKEN_SECRET,
        { expiresIn: configEnv.AUTH.ACCESS_TOKEN_LIFETIME }
      );

      res.json({ accessToken: newAccessToken });
    } catch (error) {
      console.error("Refresh token error: ", error);
      res.status(500).json({ error: "Failed to refresh token" });
    }
  }

  async register(req: Request, res: Response) {
    console.log("register request body: ", req, res);
    // Implement registration logic
    res.send("Registration successful");
  }
}
