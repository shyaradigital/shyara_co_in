import { z } from 'zod';

export const analyticsSchema = z.object({
  page: z.string().min(1, 'Page path is required'),
  device: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
});

export type AnalyticsInput = z.infer<typeof analyticsSchema>;

