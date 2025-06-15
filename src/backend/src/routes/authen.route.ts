import { Router } from "express";
import { AuthenController } from "../controllers";
import { validateData } from "../middleware/validation.middleware";
import { loginSchema } from "../validations/auth.validation";

export const authRouter = Router();
const authController = new AuthenController();
authRouter.post("/login", validateData(loginSchema), authController.login);
authRouter.post("/register", authController.register);
