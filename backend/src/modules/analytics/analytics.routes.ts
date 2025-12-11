import { Router } from 'express';
import { analyticsController } from './analytics.controller';

const router = Router();

router.post('/track', (req, res, next) => {
  analyticsController.trackPageView(req, res, next);
});

export default router;

