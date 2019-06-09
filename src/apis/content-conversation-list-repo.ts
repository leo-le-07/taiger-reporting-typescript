import repository from './repository';
import { IConversationDetails } from '@/store/modules/content-conversations/types';

interface IParams {
  _page: number;
  _limit: number;
  q: string;
  _order: string;
}
const resource = '/content-conversation-list';

export default {
  get(params: IParams): Promise<IConversationDetails[]> {
    return repository.get(`${resource}`, { params });
  },
};
