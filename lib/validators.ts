import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .trim()
    .toLowerCase(),
  organization: z
    .string()
    .min(2, "Organization must be at least 2 characters")
    .max(200, "Organization must be less than 200 characters")
    .trim(),
  phone: z
    .string()
    .max(30, "Phone number is too long")
    .trim()
    .optional()
    .or(z.literal("")),
  sector: z.string().min(1, "Please select a sector"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const SECTOR_OPTIONS = [
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "business", label: "Business Operations" },
  { value: "public-sector", label: "Public Sector" },
  { value: "compliance", label: "Compliance & Tax" },
  { value: "data-ai", label: "Data & AI" },
  { value: "other", label: "Other" },
] as const;
