import repository from './repository';
import { IContentFlowDiagramState } from '@/store/modules/content-flow-diagram/types';

const resource = '/content-flow-diagram';

export default {
  get(): Promise<IContentFlowDiagramState> {
    return repository.get(`${resource}`);
  },
};
