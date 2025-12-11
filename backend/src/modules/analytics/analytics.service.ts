import prisma from '../../config/database';
import { CreateAnalyticsDto, AnalyticsDto } from './analytics.dto';
import logger from '../../utils/logger';
import { Prisma } from '@prisma/client';

export class AnalyticsService {
  async trackPageView(data: CreateAnalyticsDto): Promise<AnalyticsDto> {
    try {
      const analytics = await prisma.analytics.create({
        data: {
          page: data.page,
          device: data.device || undefined,
          metadata: data.metadata ? (data.metadata as Prisma.InputJsonValue) : undefined,
        },
      });

      logger.debug({ analyticsId: analytics.id, page: analytics.page }, 'Page view tracked');

      return {
        id: analytics.id,
        page: analytics.page,
        device: analytics.device,
        timestamp: analytics.timestamp,
        metadata: analytics.metadata as Record<string, unknown> | null,
      };
    } catch (error) {
      logger.error({ error, data }, 'Failed to track page view');
      throw error;
    }
  }
}

export const analyticsService = new AnalyticsService();

