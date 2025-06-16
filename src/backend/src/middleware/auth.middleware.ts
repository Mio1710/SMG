import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { configEnv } from "../config/env.config";
import { IRequest } from "../interface/IRequest.interface";
import { User } from "../models";

export const authMiddleware = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[0];
    console.log("Token from headers:", req.headers, token);

    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const decoded = jwt.verify(token, configEnv.AUTH.ACCESS_TOKEN_SECRET);
    if (!decoded || typeof decoded === "string") {
      res.status(401).json({ error: "Invalid token" });
      return;
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    req.user = {
      id: user._id.toString(),
      email: user.email,
    };
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};
