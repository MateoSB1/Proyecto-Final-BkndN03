import { request, response } from "express";
import { generateUsersMocks } from "../../mock/userMock.js";
import { userService } from "./userService.js";

class UserController {
  async getAll(req = request, res = response) {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createUsersMocks(req = request, res = response) {
    try {
      const { amount } = req.params;
      const users = await userService.createUsersMocks(amount);
      res.status(201).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateUser(req = request, res = response) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedUser = await userService.update(id, updatedData);
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al actualizar el usuario" });
    }
  }

  async deleteUser(req = request, res = response) {
    try {
      const { id } = req.params;
      const deletedUser = await userService.remove(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al eliminar el usuario" });
    }
  }
}

export const userController = new UserController();