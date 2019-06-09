import repository from './repository';

const resource = '/content-conversations';

export default {
  get(): Promise<{name: string}> {
    return repository.get(`${resource}`);
  },
};
