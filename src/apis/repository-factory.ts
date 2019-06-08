import chatbotUsersRepository from './chatbot-users-repo';
import chatbotPerformanceRepository from './chatbot-performance-repo';

interface IRepository {
  [key: string]: any;
}

const repositories: IRepository = {
  chatbotUsers: chatbotUsersRepository,
  chatbotPerformance: chatbotPerformanceRepository,
};

export const repositoryFactory = {
  get: (name: string) => repositories[name],
};
