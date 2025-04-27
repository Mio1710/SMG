import { Router } from "express";
import { AuthenController } from "../controllers";

export const authRouter = Router();
const authController = new AuthenController();
authRouter.post("/login", async (req, res) => {
  await authController.login(req, res);
});
authRouter.post("/register", authController.register);
