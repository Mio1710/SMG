import { Express } from "express";
import { authRouter } from "./authen.route";
import { testRouter } from "./test.route";
import { userRouter } from "./user.route";

export const route = (app: Express) => {
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/test", testRouter);
};
