import { Router } from "express";
import { AuthenController } from "../controllers";

export const authRouter = Router();
const authController = new AuthenController();
authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
