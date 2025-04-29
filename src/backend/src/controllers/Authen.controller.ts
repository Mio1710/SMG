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
        res.status(404).json({ msg: "User not found" }).end();
      }

      // compare password by bcrypt
      const isMatch = await bcrypt.compare(password, user?.password || "");

      console.log("isMatch: ", isMatch);
      if (!isMatch) {
        res.status(401).json({ msg: "Invalid credentials" }).end();
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
      res.json({ msg: "Login successful", accessToken }).end();
    } catch (error) {
      console.error("Login error: ", error);
      res.status(500).json({ msg: "Login failed", error }).end();
    }
  }

  async register(req: express.Request, res: express.Response) {
    console.log("register request body: ", req, res);
    // Implement registration logic
    res.send("Registration successful");
  }
}
