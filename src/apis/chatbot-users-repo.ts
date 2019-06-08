import repository from './repository';
import { TimeType, IChatbotUsersChart } from '@/store/modules/chatbot-users/types';

interface IParams {
  startDate: string;
  endDate: string;
  timeType: TimeType;
}

const resource = '/chatbot-users-overview';

export default {
  get(params: IParams): Promise<IChatbotUsersChart[]> {
    return repository.get(`${resource}`, { params });
  },
};
