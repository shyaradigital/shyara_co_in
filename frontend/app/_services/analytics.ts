import { apiClient } from '../_lib/api-client';

export interface AnalyticsData {
  page: string;
  device?: string;
  metadata?: Record<string, unknown>;
}

export interface AnalyticsResponse {
  success: boolean;
  data?: {
    id: string;
    page: string;
    device: string | null;
    timestamp: string;
    metadata: Record<string, unknown> | null;
  };
  error?: string;
}

export async function trackPageView(data: AnalyticsData): Promise<AnalyticsResponse> {
  try {
    const response = await apiClient.post<AnalyticsResponse>('/analytics/track', data);
    return response.data;
  } catch (error) {
    // Fail silently for analytics
    console.error('Analytics tracking failed:', error);
    return { success: false, error: 'Failed to track page view' };
  }
}

