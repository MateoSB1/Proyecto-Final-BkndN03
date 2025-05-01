import { createUserPath} from "./paths/post.js";

export const userPaths = {
  "/users": {
    get: {
      summary: "Obtenemos todos los usuarios",
      description: "Obtiene todos los usuarios registrados",
      tags: ["Users"],
      responses: {
        200: {
          description: "Devuelve todos los usuario",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {},
          },
        },
      },
    },
    post: createUserPath,
    
    
  },
  "/users/create": {
      post: createUserPath
    }
};
