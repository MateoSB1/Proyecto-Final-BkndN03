export const updateUserPath = {
  put: {
    summary: "Actualizar un usuario",
    description: "Actualiza los campos especificados de un usuario por su ID",
    tags: ["Users"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: { type: "string", format: "ObjectId" },
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
              role: { type: "string", enum: ["admin", "user"] },
              password: { type: "string" },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Usuario actualizado",
        content: {
          "application/json": { schema: { $ref: "#/components/schemas/User" } },
        },
      },
      404: { description: "Usuario no encontrado" },
      400: { description: "Datos inválidos" },
    },
  },
};
