export const createUserPath = {
  summary: "Crear un nuevo usuario",
  description:
    "Crea un nuevo usuario en el sistema. Valida que el email no esté ya registrado.",
  tags: ["Users"],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/User",
        },
      },
    },
  },
  responses: {
    201: {
      description: "Nuevo usuario creado",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User",
          },
        },
      },
    },
    400: {
      description: "Datos inválidos o email ya existente",
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
};
