import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from '@/types';
import { breadcrumb } from './modules/breadcrumb';
import { chatbotUsers } from './modules/chatbot-users';
import { chatbotPerformance } from './modules/chatbot-performance';
import { contentPerformance } from './modules/content-performance';
import { contentFlowDiagram } from './modules/content-flow-diagram';
import { contentConversations } from './modules/content-conversations';

interface IModule {
  [key: string]: any;
}

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  strict: debug,
  modules: {
    breadcrumb,
    chatbotUsers,
    chatbotPerformance,
    contentPerformance,
    contentFlowDiagram,
    contentConversations,
  },
};

export default new Vuex.Store<RootState>(store);
