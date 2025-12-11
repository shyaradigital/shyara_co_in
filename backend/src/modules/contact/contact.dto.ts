export interface ContactDto {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  createdAt: Date;
}

export interface CreateContactDto {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

