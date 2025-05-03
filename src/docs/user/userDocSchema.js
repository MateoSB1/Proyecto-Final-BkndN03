import { generateSchemaProperties } from "../utils/generatePropertiesSchems.js";

export const userDocSchema = {
  type: "object",
  properties: {
    _id: generateSchemaProperties("string", "ID único", "67ca35d1e8b1391ada8c86ea"),
    first_name: generateSchemaProperties("string", "Nombre", "Juan"),
    last_name: generateSchemaProperties("string", "Apellido", "Pérez"),
    email: generateSchemaProperties("string", "Email", "juan@example.com"),
    role: generateSchemaProperties("string", "Rol", "user"),
    pets: generateSchemaProperties("array", "Mascotas adoptadas", []),
  },
  required: ["_id", "first_name", "last_name", "email", "role"],
};