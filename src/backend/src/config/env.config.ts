import * as dotenv from "dotenv";

dotenv.config();

export const configEnv = {
  DB: {
    HOST: process.env.DB_HOST || "localhost",
    PORT: process.env.DB_PORT || 27017,
    NAME: process.env.DB_NAME || "f8",
    USERNAME: process.env.USER_NAME || "",
    PASSWORD: process.env.USER_PASSWORD || "",
    HOST_PORT: process.env.DB_HOST_PORT || "mongodb://localhost:27017",
  },
};
