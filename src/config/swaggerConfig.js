import swaggerJsDoc from "swagger-jsdoc";
import { userPaths } from "../docs/user/userPath.js";
import { userDocSchema } from "../docs/user/userDocSchema.js";
import { petPaths } from "../docs/pets/petsPath.js";
import { petDocSchema } from "../docs/pets/petDocSchema.js";

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
    // Se puede agregar más paths de otros módulos
  },
  components: {
    schemas: {
      User: userDocSchema,
      Pet: petDocSchema
      // Se puede agregar más schemas de otros módulos
    }
  }
};
