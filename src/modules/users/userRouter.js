import { Router } from "express";
import { userController } from "./userController.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/mocks/:amount", userController.createUsersMocks);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;