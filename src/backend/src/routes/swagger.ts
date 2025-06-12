export const swaggerDocument = {
  swagger: "2.0",
  info: { version: "1.0.0", title: "Example API" },
  paths: {
    "/user": {
      get: {
        responses: {
          200: {
            description: "all users",
          },
        },
      },
    },
    "/auth/login": {
      post: {
        summary: "Login user",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string", format: "email" },
                  password: { type: "string", minLength: 6 },
                },
              },
            },
          },
        },
      },
    },
  },
};
