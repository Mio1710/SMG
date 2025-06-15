import dotenv from "dotenv";
import express, { Express } from "express";
import path from "path";

import expressEjsLayouts from "express-ejs-layouts";
import fs from "fs";
import * as swaggerUi from "swagger-ui-express";
import * as YAML from "yaml";

const file = fs.readFileSync("./src/routes/swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

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

app.use(express.json());

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Add router
route(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
