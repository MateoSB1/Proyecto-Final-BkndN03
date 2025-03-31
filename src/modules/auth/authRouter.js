import { Router } from "express";
import { authController } from "./authController.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "./authSchemas.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), authController.registerUser);
router.post("/login",validateSchema(loginSchema), authController.login);

export default router;
