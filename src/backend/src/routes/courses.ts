import { Router } from "express";
import { CourseController } from "../controllers";

export const courseRouter = Router();
const courseController = new CourseController();
courseRouter.get("/", courseController.index);
courseRouter.post("/", courseController.create);
courseRouter.get("/:id", courseController.getCourse);
courseRouter.delete("/:id", courseController.deleteCourse);
