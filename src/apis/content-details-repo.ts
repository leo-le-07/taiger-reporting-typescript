import repository from './repository';
import { IContent } from '@/store/modules/content-performance/types';

interface IParams {
  _page: number;
  _limit: number;
  q: string;
  _sort: number | null;
  _order: string;
}

const resource = '/content-details';

export default {
  get(params: IParams): Promise<IContent[]> {
    return repository.get(`${resource}`, { params });
  },
};
