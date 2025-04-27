import dotenv from "dotenv";
import express, { Express } from "express";
import path from "path";

import expressEjsLayouts from "express-ejs-layouts";
import { connectMongoDb } from "./db/mongo.config";
import { route } from "./routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
// connect to mongodb
connectMongoDb();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");

// Setup for API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add router
route(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
