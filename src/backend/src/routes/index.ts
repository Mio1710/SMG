import { Express } from "express";
import { newsRouter } from "./news";

export const route = (app: Express) => {
  app.use("/news", newsRouter);
};
