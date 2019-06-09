import repository from './repository';
import { IAnswerRating } from '@/store/modules/content-performance/types';

const resource = '/answer-ratings';

export default {
  get(): Promise<IAnswerRating[]> {
    return repository.get(`${resource}`);
  },
};
