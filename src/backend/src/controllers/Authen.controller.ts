import bcrypt from "bcrypt";
// import  { Request, Response } from "express";
import * as express from "express";

import jwt from "jsonwebtoken";
import { configEnv } from "../config/env.config";
import { User } from "../models";

export class AuthenController {
  async login(req: express.Request, res: express.Response) {
    try {
      console.log("Login request body: ", req.body);

      // verify user credentials

      const { email, password } = req.body;
      // get user
      const user = await User.findOne({ email });
      console.log("User found: ", user?.password, email, password);
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      // compare password by bcrypt
      const isMatch = await bcrypt.compare(password, user?.password);

      console.log("isMatch: ", isMatch);
      if (!isMatch) {
        return res.status(401).json({ msg: "Invalid credentials" });
      }

      // generate token
      const accessSecret = configEnv.AUTH.ACCESS_TOKEN_SECRET;

      const data = {
        id: user?._id,
        email: user?.email,
      };

      const accessToken = jwt.sign(data, accessSecret, { expiresIn: 36000 });
      console.log("Access token: ", accessToken);

      // Implement login logic
      return res.json({ msg: "Login successful", accessToken });
    } catch (error) {
      console.error("Login error: ", error);
      return res.status(500).json({ msg: "Login failed", error });
    }
  }

  async register(req: express.Request, res: express.Response) {
    console.log("register request body: ", req, res);
    // Implement registration logic
    res.send("Registration successful");
  }
}
