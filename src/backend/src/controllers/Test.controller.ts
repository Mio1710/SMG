import { Request, Response } from "express";

export const test = (req: Request, res: Response) => {
  console.log("payload: ", req.body);

  res.json({ msg: "Test route is working!" });
};

export class TestController {
  async test(req: Request, res: Response) {
    console.log("Test route is working!", req.body);
    res.json({ msg: "Test route controller is working!" }).end();
  }
}
