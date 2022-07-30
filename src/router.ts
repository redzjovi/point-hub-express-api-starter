import { Router } from "express";
import userRouter from "@src/modules/user/router";

export default function () {
  const router = Router();
  /**
   * Register all available modules
   * <modules>/router.ts
   */
  router.use("/user", userRouter);
  router.get("/", (_, res) => {
    res.json({
      msg: "Hello World",
    });
  });

  return router;
}
