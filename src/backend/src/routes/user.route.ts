import { Router } from "express";
import { UserController } from "../controllers";
import { authMiddleware } from "../middleware/auth.middleware";

export const userRouter = Router();
const userController = new UserController();
userRouter.get("/", authMiddleware, userController.index);
userRouter.post("/", userController.create);
userRouter.get("/:id", userController.getUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.put("/:id", userController.updateUser);
