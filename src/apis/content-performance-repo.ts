import repository from './repository';
import { IContentPerformanceMetrics } from '@/store/modules/content-performance/types';

const resource = '/content-performance';

export default {
  get(): Promise<IContentPerformanceMetrics> {
    return repository.get(`${resource}`);
  },
};
