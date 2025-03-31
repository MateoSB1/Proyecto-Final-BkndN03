import { request, response } from "express";
import { petService } from "./petService.js";

class PetController {
  async create(req = request, res = response, next) {
    try {
      const newPet = await petService.create({});
      res.status(201).json(newPet);
    } catch (error) {
      next(error);
    }
  }

  async getPetById(req = request, res = response, next) {
    try {
      const { id } = req.params;
      const pet = await petService.getOne({ _id: id });
      res.status(200).json(pet);
    } catch (error) {
      next(error);
    }
  }

  async createPetsMocks(req = request, res = response, next) {
    try {
      const { amount } = req.params;
      const pets = await petService.createPetsMocks(amount);
      res.status(201).json(pets);
    } catch (error) {
      next(error);
    }
  }

  async updatePet(req = request, res = response, next) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedPet = await petService.update(id, updatedData);
      if (!updatedPet) {
        return res.status(404).json({ message: "Mascota no encontrada" });
      }
      res.status(200).json(updatedPet);
    } catch (error) {
      next(error);
    }
  }

  async deletePet(req = request, res = response, next) {
    try {
      const { id } = req.params;
      const deletedPet = await petService.remove(id);
      if (!deletedPet) {
        return res.status(404).json({ message: "Mascota no encontrada" });
      }
      res.status(200).json({ message: "Mascota eliminada correctamente" });
    } catch (error) {
      next(error);
    }
  }
}

export const petController = new PetController();