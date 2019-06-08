import chatbotUsersRepository from './chatbot-users-repository';

interface IRepository {
  [key: string]: any;
}

const repositories: IRepository = {
  chatbotUsers: chatbotUsersRepository,
};

export const repositoryFactory = {
  get: (name: string) => repositories[name],
};
