import chatbotUsersRepository from './chatbot-users-repo';
import chatbotPerformanceRepository from './chatbot-performance-repo';
import contentPerformanceRepository from './content-performance-repo';
import contentDetailsRepository from './content-details-repo';
import answerRatingRepository from './answer-rating-repo';

interface IRepository {
  [key: string]: any;
}

const repositories: IRepository = {
  chatbotUsers: chatbotUsersRepository,
  chatbotPerformance: chatbotPerformanceRepository,
  contentPerformance: contentPerformanceRepository,
  contentDetails: contentDetailsRepository,
  answerRating: answerRatingRepository,
};

export const repositoryFactory = {
  get: (name: string) => repositories[name],
};
