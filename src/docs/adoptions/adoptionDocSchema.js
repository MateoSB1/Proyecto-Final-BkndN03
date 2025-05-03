export const adoptionDocSchema = {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "ID único de la adopción",
        example: "67ca35d1e8b1391ada8c86ea",
      },
      owner: {
        $ref: "#/components/schemas/User",
      },
      pet: {
        $ref: "#/components/schemas/Pet",
      },
    },
    required: ["_id", "owner", "pet"],
    example: {
      _id: "67ca35d1e8b1391ada8c86ea",
      owner: {
        _id: "67ca35d1e8b1391ada8c86eb",
        first_name: "Juan",
        last_name: "Pérez",
        email: "juan@example.com",
      },
      pet: {
        _id: "67ca35d1e8b1391ada8c86ec",
        name: "Firulais",
        specie: "Perro",
        adopted: true,
        birthDate: "2020-05-10T00:00:00.000Z",
      },
    },
  };
  