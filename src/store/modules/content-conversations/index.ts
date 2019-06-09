import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { repositoryFactory } from '@/apis/repository-factory';
import { RootState } from '@/types';
import { IContentConversationsState } from './types';
import { DEFAULT_PAGE_SIZE } from '@/constants';
import { getQueryParams } from '@/utils/request-helpers';

export const name = 'contentConversations';

const contentConversationsRepository = repositoryFactory.get('contentConversations');
const contentConversationListRepository = repositoryFactory.get('contentConversationList');
const contentConversationHistoryRepository = repositoryFactory.get('contentConversationHistory');

const state: IContentConversationsState = {
  name: '',
  conversationTableManagement: {
    isLoading: false,
    pageSize: DEFAULT_PAGE_SIZE,
    page: 1,
    totalRows: 4, // TODO: should get from server
    contentList: [],
  },
  converstationDetails: {
    contentList: [],
  },
};

const mutations: MutationTree<IContentConversationsState> = {
  setIntentName(state, name) {
    state.name = name;
  },
  setConversationLoading(state, value) {
    state.conversationTableManagement.isLoading = value;
  },
  setConversationList(state, contentList) {
    state.conversationTableManagement.contentList = contentList;
  },
  setCurrentPage(state, currentPage) {
    state.conversationTableManagement.page = currentPage;
  },
  setPageSize(state, pageSize) {
    state.conversationTableManagement.pageSize = pageSize;
  },
  setConversationDetails(state, conversations) {
    state.converstationDetails.contentList = conversations;
  },
};

const actions: ActionTree<IContentConversationsState, RootState> = {
  updateCurrentPage({ commit, dispatch }, currentPage) {
    commit('setCurrentPage', currentPage);
    dispatch('getContentConversationList');
  },
  updatePageSize({ commit, dispatch }, pageSize) {
    commit('setPageSize', pageSize);
    dispatch('getContentConversationList');
  },
  async getContentConversations({ commit, rootState }) {
    const response = await contentConversationsRepository.get({
      id: rootState.contentPerformance.selectedIntentId,
    });
    const { data } = response;
    commit('setIntentName', data.name);
  },
  async getContentConversationList({ commit, state }) {
    commit('setConversationLoading', true);

    const params = getQueryParams({
      page: state.conversationTableManagement.page,
      pageSize: state.conversationTableManagement.pageSize,
    });
    const response = await contentConversationListRepository.get(params);
    const data = response.data;

    commit('setConversationList', data);
    commit('setConversationLoading', false);
  },
  async getConversationDetails({ commit }, id) {
    const response = await contentConversationHistoryRepository.get({ id });

    const { data } = response;

    commit('setConversationDetails', data);
  },
};

export const contentConversations: Module<IContentConversationsState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};
