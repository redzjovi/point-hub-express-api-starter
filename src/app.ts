import express from "express";
import Middleware from "@src/middleware/index";
import router from "@src/router";

export function createApp() {
  const app = express();

  const middleware = new Middleware(app);
  middleware.registerBeforeRoutes();

  app.use("/v1", router());

  middleware.registerAfterRoutes();

  return app;
}
