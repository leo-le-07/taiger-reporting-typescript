import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from '@/types';
import { chatbotUsers } from './modules/chatbot-users';
import { chatbotPerformance } from './modules/chatbot-performance';
import { contentPerformance } from './modules/content-performance';

interface IModule {
  [key: string]: any;
}

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  strict: debug,
  modules: {
    chatbotUsers,
    chatbotPerformance,
    contentPerformance,
  },
};

export default new Vuex.Store<RootState>(store);
