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
}
