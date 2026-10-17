import { z } from "zod";

export const serviceRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  address: z
    .string()
    .min(5, "Please enter a valid service address")
    .max(200, "Address is too long"),
  services: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  details: z
    .string()
    .max(1000, "Additional details must be under 1000 characters")
    .optional()
    .or(z.literal("")),
});

export type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>;
