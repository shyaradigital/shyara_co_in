export interface AnalyticsDto {
  id: string;
  page: string;
  device: string | null;
  timestamp: Date;
  metadata: Record<string, unknown> | null;
}

export interface CreateAnalyticsDto {
  page: string;
  device?: string;
  metadata?: Record<string, unknown>;
}

