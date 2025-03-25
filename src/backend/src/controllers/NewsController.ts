import { Response, Request } from "express";
import { Course } from "../models";
export class NewsController {
  index(_req: Request, res: Response) {
    res.render("index");
  }

  async create(_req: Request, res: Response) {
    try {
      const data = await Course.create({
        name: "123",
        description: "123",
        image: "123",
        // created_at: "123",
        // updated_at: "123",
      });
      res.json({ msg: "Create successfully!!", data });
    } catch (error) {
      console.log("Create error: ", error);
    }
  }

  async getCourse(req: Request, res: Response) {
    try {
      const courseId = req.query.id;
      console.log("courseId: ", courseId);

      const course = await Course.findById("67e2da6d6285fe1e0266bab3");
      res.json({ data: course });
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
