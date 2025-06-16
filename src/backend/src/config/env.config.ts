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
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin_password",
  },
  AUTH: {
    ACCESS_TOKEN_LIFETIME: parseInt(
      process.env.ACCESS_TOKEN_LIFETIME ?? "36000",
      10
    ),
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "",
    REFRESH_TOKEN_LIFETIME: parseInt(
      process.env.REFRESH_TOKEN_LIFETIME ?? "2592000"
    ),
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "",
  },
};
