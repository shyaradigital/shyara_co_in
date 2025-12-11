import { Router } from 'express';
import { contactController } from './contact.controller';
import rateLimit from 'express-rate-limit';
import { CONTACT_RATE_LIMIT_MAX_REQUESTS, CONTACT_RATE_LIMIT_WINDOW_MS } from '../../common/constants';

const router = Router();

const contactRateLimiter = rateLimit({
  windowMs: CONTACT_RATE_LIMIT_WINDOW_MS,
  max: CONTACT_RATE_LIMIT_MAX_REQUESTS,
  message: 'Too many contact form submissions, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', contactRateLimiter, (req, res, next) => {
  contactController.createContact(req, res, next);
});

export default router;

