import { Router } from "express";
import { NewsController } from "../controllers/NewsController";

export const newsRouter = Router();
const newsController = new NewsController();
newsRouter.use("/", newsController.index);
