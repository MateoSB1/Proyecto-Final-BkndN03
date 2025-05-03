import swaggerJsDoc from "swagger-jsdoc";
import { userPaths } from "../docs/user/userPath.js";
import { userDocSchema } from "../docs/user/userDocSchema.js";
import { petPaths } from "../docs/pets/petsPath.js";
import { petDocSchema } from "../docs/pets/petDocSchema.js";
import { adoptionPaths } from "../docs/adoptions/adoptionPath.js";
import { adoptionDocSchema } from "../docs/adoptions/adoptionDocSchema.js"; // 👈 Importamos

export const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'PetsMSB API',
    description: 'Documentación de la API de PetsMSB',
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:8080/api`,
      description: 'Servidor de desarrollo',
    },
  ],
  paths: {
    ...userPaths,
    ...petPaths,
    ...adoptionPaths,
  },
  components: {
    schemas: {
      User: userDocSchema,
      Pet: petDocSchema,
      Adoption: adoptionDocSchema,
    },
  },
};