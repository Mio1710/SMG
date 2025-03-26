import { Express } from "express";
import { courseRouter } from "./courses";

export const route = (app: Express) => {
  app.use("/api/course", courseRouter);
};
