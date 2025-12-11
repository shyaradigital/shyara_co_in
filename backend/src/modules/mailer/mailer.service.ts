import { resend, EMAIL_FROM, EMAIL_TO } from '../../config/resend';
import logger from '../../utils/logger';

export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export class MailerService {
  async sendContactNotification(data: ContactEmailData): Promise<void> {
    if (!resend) {
      logger.warn('Resend API key not configured. Email notification skipped.');
      return;
    }

    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${data.name}
          Email: ${data.email}
          ${data.phone ? `Phone: ${data.phone}` : ''}
          
          Message:
          ${data.message}
        `,
      });

      logger.info({ email: data.email }, 'Contact notification email sent');
    } catch (error) {
      logger.error({ error, data }, 'Failed to send contact notification email');
      throw new Error('Failed to send email notification');
    }
  }
}

export const mailerService = new MailerService();

