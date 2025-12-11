import { Request, Response, NextFunction } from 'express';
import { analyticsSchema } from './analytics.schema';
import { analyticsService } from './analytics.service';
import { ApiResponse } from '../../common/types';

export class AnalyticsController {
  async trackPageView(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedData = analyticsSchema.parse(req.body);

      const analytics = await analyticsService.trackPageView(validatedData);

      const response: ApiResponse = {
        success: true,
        data: analytics,
      };

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export const analyticsController = new AnalyticsController();

