import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  country: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  whatsapp: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
