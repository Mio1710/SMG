import { Response, Request } from "express";
import { Query } from "../types/common";

export class NewsController {
  index(req: Request, res: Response) {
    res.render("index");
  }
}
