import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "/products",
        cors: {
          origin: "*",
        },
        responseData: {
          200: {
            description: "Products",
          },
          502: "server error",
        },
      },
    },
  ],
};
