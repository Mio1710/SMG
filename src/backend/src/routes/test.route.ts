import { Router } from "express";
import { test, TestController } from "../controllers/Test.controller";

export const testRouter = Router();
const testController = new TestController();
testRouter.get("/", test);
testRouter.get("/controller", testController.test);
