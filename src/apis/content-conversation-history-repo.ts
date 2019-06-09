import repository from './repository';
import { IConversationHistory } from '@/store/modules/content-conversations/types';

const resource = '/content-conversation-history';

export default {
  get(params: { id: string }): Promise<IConversationHistory[]> {
    return repository.get(`${resource}`, { params });
  },
};
