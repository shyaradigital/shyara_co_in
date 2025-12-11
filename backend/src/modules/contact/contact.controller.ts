import { Request, Response, NextFunction } from 'express';
import { contactSchema } from './contact.schema';
import { contactService } from './contact.service';
import { ApiResponse } from '../../common/types';

export class ContactController {
  async createContact(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedData = contactSchema.parse(req.body);

      const contact = await contactService.createContact(validatedData);

      const response: ApiResponse = {
        success: true,
        data: contact,
        message: 'Contact form submitted successfully',
      };

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export const contactController = new ContactController();

