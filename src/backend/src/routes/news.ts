import { Router } from "express";
import { NewsController } from "../controllers/NewsController";

export const newsRouter = Router();
const newsController = new NewsController();
newsRouter.get("/", newsController.index);
newsRouter.post("/", newsController.create);
newsRouter.get("/:id", newsController.getCourse);
