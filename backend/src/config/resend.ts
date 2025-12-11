import { Resend } from 'resend';

// Resend is optional for local development
export const resend =
  process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== ''
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@shyara.co.in';
export const EMAIL_TO = process.env.EMAIL_TO || 'contact@shyara.co.in';

