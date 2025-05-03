export const petPaths = {
  "/pets": {
    get: {
      summary: "Obtener todas las mascotas",
      description: "Devuelve una lista con todas las mascotas registradas en el sistema.",
      tags: ["Pets"],
      responses: {
        200: {
          description: "Lista obtenida exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Pet",
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
      summary: "Crear una nueva mascota",
      description: "Crea una nueva mascota con los datos proporcionados. Se requieren campos obligatorios.",
      tags: ["Pets"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Pet",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Mascota creada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
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
  "/pets/{id}": {
    get: {
      summary: "Obtener una mascota por ID",
      description: "Devuelve los detalles de una mascota específica usando su ID.",
      tags: ["Pets"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID único de la mascota",
          required: true,
          schema: {
            type: "string",
            format: "ObjectId",
          },
        },
      ],
      responses: {
        200: {
          description: "Mascota encontrada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        404: {
          description: "Mascota no encontrada",
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
    put: {
      summary: "Actualizar una mascota",
      description: "Actualiza los datos de una mascota existente mediante su ID.",
      tags: ["Pets"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID único de la mascota",
          required: true,
          schema: {
            type: "string",
            format: "ObjectId",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Pet",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Mascota actualizada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        400: {
          description: "Datos inválidos",
          content: {
            "application/json": {},
          },
        },
        404: {
          description: "Mascota no encontrada",
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
    delete: {
      summary: "Eliminar una mascota",
      description: "Elimina una mascota del sistema utilizando su ID.",
      tags: ["Pets"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID único de la mascota",
          required: true,
          schema: {
            type: "string",
            format: "ObjectId",
          },
        },
      ],
      responses: {
        200: {
          description: "Mascota eliminada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        404: {
          description: "Mascota no encontrada",
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