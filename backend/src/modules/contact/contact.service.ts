import prisma from '../../config/database';
import { CreateContactDto, ContactDto } from './contact.dto';
import { mailerService } from '../mailer/mailer.service';
import logger from '../../utils/logger';

export class ContactService {
  async createContact(data: CreateContactDto): Promise<ContactDto> {
    try {
      const contact = await prisma.contact.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          message: data.message,
        },
      });

      // Send email notification asynchronously (don't block response)
      mailerService.sendContactNotification(data).catch((error) => {
        logger.error({ error, contactId: contact.id }, 'Failed to send contact email');
      });

      logger.info({ contactId: contact.id, email: contact.email }, 'Contact created');

      return {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        message: contact.message,
        createdAt: contact.createdAt,
      };
    } catch (error) {
      logger.error({ error, data }, 'Failed to create contact');
      throw error;
    }
  }
}

export const contactService = new ContactService();

