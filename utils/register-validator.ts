import { z } from 'zod';

export const registerFormSchema = z.object({
    fullname: z.string({ message: "Name is Required" })
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name cannot exceed 50 characters" }),
    phone: z.string({ message: "Phone Number is Required" })
        .regex(/^[0-9]{10,15}$/, { message: "Phone number must be between 10 and 15 digits" }),
    email: z.string({ message: "Email is Required" })
        .email({ message: "Invalid email address" }),
    password: z.string({ message: "Password is Required" })
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(100, { message: "Password cannot exceed 100 characters" })
});

