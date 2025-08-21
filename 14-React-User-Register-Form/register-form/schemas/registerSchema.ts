import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required!")
    .refine((val) => val.trim() !== "", "Cannot be empty space!"),

  lastName: z
    .string()
    .min(1, "Last Name is required!")
    .refine((val) => val.trim() !== "", "Cannot be empty space"),

  email: z.string().email("Invalid Email"),

  contact: z
    .string()
    .min(10, "Must be at least 10 digits!")
    .regex(/^\d+$/, "Contact number must contain only digits"),

  role: z.string().min(1, "Select a role!"),

  skills: z
    .array(z.string().min(1, "Skill is required!"))
    .min(1, "At least one skill is required!"),

  message: z.string().optional(),
});


export type RegisterSchemaType = z.infer<typeof registerSchema>;