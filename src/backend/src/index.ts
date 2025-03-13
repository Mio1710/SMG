import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

import expressEjsLayouts from "express-ejs-layouts";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
