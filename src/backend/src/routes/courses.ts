import { Router } from "express";
import { CourseController } from "../controllers/CoursesController";

export const courseRouter = Router();
const courseController = new CourseController();
courseRouter.get("/", courseController.index);
courseRouter.post("/", courseController.create);
courseRouter.get("/:id", courseController.getCourse);
