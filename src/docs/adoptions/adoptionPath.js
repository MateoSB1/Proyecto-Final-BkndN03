export const adoptionPaths = {
  "/adoptions": {
    get: {
      summary: "Obtener todas las adopciones",
      description:
        "Devuelve una lista con todas las adopciones registradas en el sistema",
      tags: ["Adoptions"],
      responses: {
        200: {
          description: "Lista de adopciones obtenida exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Adoption",
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
    post: {
      summary: "Crear una nueva adopción",
      description:
        "Crea una nueva relación de adopción entre un usuario y una mascota",
      tags: ["Adoptions"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["owner", "pet"],
              properties: {
                owner: {
                  type: "string",
                  format: "ObjectId",
                  description: "ID del usuario que adopta la mascota",
                },
                pet: {
                  type: "string",
                  format: "ObjectId",
                  description: "ID de la mascota que se adopta",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Adopción creada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Adoption",
              },
            },
          },
        },
        400: {
          description: "Datos inválidos o faltantes",
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
  "/adoptions/{id}": {
    get: {
      summary: "Obtener una adopción por ID",
      description: "Devuelve información detallada de una adopción específica",
      tags: ["Adoptions"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "ObjectId",
          },
          description: "ID de la adopción",
        },
      ],
      responses: {
        200: {
          description: "Adopción obtenida exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Adoption",
              },
            },
          },
        },
        404: {
          description: "Adopción no encontrada",
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
