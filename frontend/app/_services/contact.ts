import { apiClient } from '../_lib/api-client';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactResponse {
  success: boolean;
  data?: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    createdAt: string;
  };
  error?: string;
  message?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  const response = await apiClient.post<ContactResponse>('/contact', data);
  return response.data;
}

