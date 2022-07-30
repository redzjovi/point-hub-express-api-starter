import { Router } from "express";
import * as controller from "./controllers/index";

const router = Router();

router.get("/", controller.readAll);
router.get("/:id", controller.readOne);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.destroy);

export default router;
