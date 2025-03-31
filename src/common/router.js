import { Router } from "express";
import userRouter from "../modules/users/userRouter.js";
import authRouter from "../modules/auth/authRouter.js";
import petRouter from "../modules/pets/petRouter.js";
import adoptionRouter from "../modules/adoptions/adoptionRouter.js";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/pets", petRouter);
router.use("/adoptions", adoptionRouter);

export default router;
