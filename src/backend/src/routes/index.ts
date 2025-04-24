import { Express } from "express";
import { courseRouter } from "./courses";
import { userRouter } from "./user.route";

export const route = (app: Express) => {
  app.use("/api/course", courseRouter);
  app.use("/api/user", userRouter);
};
