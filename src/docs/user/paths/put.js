export const updateUserPath = {
  summary: "Actualizar un usuario",
  description: "Actualiza los campos especificados de un usuario por su ID.",
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
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            first_name: { type: "string" },
            last_name: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 6 },
            role: { type: "string", enum: ["admin", "user"] },
          },
          additionalProperties: false,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Usuario actualizado exitosamente",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User",
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
};
