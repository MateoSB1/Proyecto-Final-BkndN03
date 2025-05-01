import { Router } from "express";
import { userController } from "./userController.js";
import { userDao } from "./userDAO.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { objectIdSchema } from "../../common/schemas/objectIdSchema.js";
import { updateUserSchema } from "./updateUserSchema.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/mocks/:amount", userController.createUsersMocks);
router.put("/:id", validateSchema(updateUserSchema), userController.updateUser);
router.delete("/:id", validateSchema(objectIdSchema), async (req, res) => {
  const { id } = req.params;
  await userDao.remove(id);
  res.status(200).json("Usuario eliminado");
})

export default router;