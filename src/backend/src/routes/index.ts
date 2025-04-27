import { Express } from "express";
import { authRouter } from "./authen.route";
import { userRouter } from "./user.route";

export const route = (app: Express) => {
  app.use("/api/course", authRouter);
  app.use("/api/user", userRouter);
};
