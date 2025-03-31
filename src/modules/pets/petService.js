import { NotFoundError } from "../../common/errors/errors.js";
import { generatePetsMocks } from "../../mock/petsMock.js";
import { petDao } from "./petDAO.js";

class PetService {
  async create(data) {
    return await petDao.create(data);
  }

  async getOne(query) {
    const pet = await petDao.getOne(query);
    if (!pet) throw new NotFoundError("Mascota no encontrada");
    return pet;
  }

  async createPetsMocks(amount) {
    const pets = generatePetsMocks(amount);
    await petDao.removeAll();
    for (const pet of pets) {
      await petDao.create(pet);
    }
    return pets;
  }

  async update(id, data) {
    const updatedPet = await petDao.update(id, data);
    if (!updatedPet) throw new NotFoundError("Mascota no encontrada");
    return updatedPet;
  }

  async remove(id) {
    const deletedPet = await petDao.remove(id);
    if (!deletedPet) throw new NotFoundError("Mascota no encontrada");
    return deletedPet;
  }
}

export const petService = new PetService();