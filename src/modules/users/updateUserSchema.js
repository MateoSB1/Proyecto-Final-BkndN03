import { z } from "zod";

export const updateUserSchema = {
  params: z.object({
    id: z.string().regex(/^[a-fA-F0-9]{24}$/, "Debe ser un ObjectId válido"),
  }),
  body: z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().email().optional(),
    role: z.enum(["admin", "user"]).optional(),
    password: z.string().min(6).optional(),
  }).partial(),
};