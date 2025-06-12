export const swaggerDocument = {
  swagger: "2.0",
  info: { version: "1.0.0", title: "Example API" },
  paths: {
    "/user": { get: { responses: { 200: { description: "all users" } } } },
  },
};
