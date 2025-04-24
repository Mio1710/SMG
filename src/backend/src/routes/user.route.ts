import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const userRouter = Router();
const userController = new UserController();
userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
userRouter.get("/:id", userController.getUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.put("/:id", userController.updateUser);
