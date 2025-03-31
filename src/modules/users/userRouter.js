import { Router } from "express";
import { userController } from "./userController.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/mocks/:amount", userController.createUsersMocks);

export default router;