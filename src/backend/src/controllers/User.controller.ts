import { Request, Response } from "express";
import { User } from "../models";

export class UserController {
  async index(req: Request, res: Response) {
    const query = req.query;
    console.log("query: ", query);

    const data = await User.find();
    console.log("data: ", data);

    res.status(200).json({ data, msg: "Success" });
  }

  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const data = await User.create({
        name,
        email,
        password,
      });
      res.status(200).json({ msg: "Create successfully!!", data });
    } catch (error) {
      console.log("Create error: ", error);
      res.status(500).json({ msg: "Create failed!!", error });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      console.log("userId: ", userId);

      const user = await User.findById(userId);
      res.status(200).json({ data: user });
    } catch (error) {
      console.log("Get user error: ", error);
      res.status(500).json({ msg: "Get user failed!!", error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userId = req.query.id;
      console.log("userId: ", userId);

      const user = await User.findByIdAndDelete(userId);
      res.status(200).json({ msg: "Delete successfully!!", data: user });
    } catch (error) {
      console.log("Delete user error: ", error);
      res.status(500).json({ msg: "Delete user failed!!", error });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const { name, email, password } = req.body;
      console.log("userId: ", userId);

      const user = await User.findByIdAndUpdate(userId, {
        name,
        email,
        password,
      });
      res.status(200).json({ msg: "Update successfully!!", data: user });
    } catch (error) {
      console.log("Update user error: ", error);
      res.status(500).json({ msg: "Update user failed!!", error });
    }
  }
}
