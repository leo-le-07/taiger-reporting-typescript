import { IContentPerformanceState } from '@/store/modules/content-performance/types';

export interface RootState {
  strict: boolean;
  contentPerformance: IContentPerformanceState;
}
