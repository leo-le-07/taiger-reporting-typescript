import repository from './repository';
import { IChatbotPerformance } from '@/store/modules/chatbot-performance/types';

const resource = '/chatbot-performance';

export default {
  get(): Promise<IChatbotPerformance> {
    return repository.get(`${resource}`);
  },
};
