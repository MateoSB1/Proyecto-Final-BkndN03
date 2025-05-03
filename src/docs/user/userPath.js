import { createUserPath } from "./paths/post.js";
import { updateUserPath } from "./paths/put.js";

export const userPaths = {
  "/users": {
    get: {
      summary: "Obtener todos los usuarios",
      description:
        "Devuelve una lista con todos los usuarios registrados en el sistema.",
      tags: ["Users"],
      responses: {
        200: {
          description: "Lista de usuarios obtenida exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
        500: {
          description: "Error interno del servidor",
          content: {
            "application/json": {},
          },
        },
      },
    },
    post: createUserPath,
  },
  "/users/{id}": {
    get: {
      summary: "Obtener un usuario por ID",
      description:
        "Devuelve información detallada de un usuario específico usando su ID.",
      tags: ["Users"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID único del usuario",
          schema: {
            type: "string",
            format: "ObjectId",
          },
        },
      ],
      responses: {
        200: {
          description: "Usuario encontrado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
          content: {
            "application/json": {},
          },
        },
        500: {
          description: "Error interno del servidor",
          content: {
            "application/json": {},
          },
        },
      },
    },
    put: updateUserPath,
    delete: {
      summary: "Eliminar un usuario",
      description: "Elimina un usuario del sistema utilizando su ID.",
      tags: ["Users"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID único del usuario",
          schema: {
            type: "string",
            format: "ObjectId",
          },
        },
      ],
      responses: {
        200: {
          description: "Usuario eliminado exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
          content: {
            "application/json": {},
          },
        },
        500: {
          description: "Error interno del servidor",
          content: {
            "application/json": {},
          },
        },
      },
    },
  },
};
