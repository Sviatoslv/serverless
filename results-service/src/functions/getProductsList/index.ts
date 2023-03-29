import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "/results",
        cors: {
          origin: "https://sviatoslv.github.io/learn_angular/",
        },
      },
    },
  ],
};
