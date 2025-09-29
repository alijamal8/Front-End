import z, { regex } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(4, { message: "Full name must be at least 4 characters" })
    .max(50, { message: "Full name must not exceed 50 characters" })
    .regex(/^[\p{L} ]+$/u, {
      message: "Full name can only contain letters and spaces.",
    }),

  phone: z.coerce
    .string()
    .min(11, { message: "Phone number is too short." })
    .max(14, { message: "Phone number is too long." }),

  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address." })
    .max(254, { message: "Email address is too long." }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(128, { message: "Password is too long." }),
});


export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});