import { generateSchemaProperties } from "../utils/generatePropertiesSchems.js";

export const petDocSchema = {
  type: "object",
  properties: {
    _id: generateSchemaProperties("string", "ID único", "67ca35d1e8b1391ada8c86ea"),
    name: generateSchemaProperties("string", "Nombre", "Felix"),
    specie: generateSchemaProperties("string", "Especie", "Gato"),
    adopted: generateSchemaProperties("boolean", "Adoptado", false),
    owner: generateSchemaProperties("ObjectID", "Dueño", "67ca35d1e8b1391ada8c86eb"),
    image: generateSchemaProperties("string", "Imagen", "https://example.com/image.jpg"),
    birthDate: generateSchemaProperties("string", "Fecha de nacimiento", "2020-10-12T00:00:00.000Z")
  },
  required: ["_id", "name", "specie"]
};