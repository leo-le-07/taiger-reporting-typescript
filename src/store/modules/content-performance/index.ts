import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { repositoryFactory } from '@/apis/repository-factory';
import { formatNumber, formatPercentage } from '@/utils/number-formatter';
import { RootState } from '@/types';
import { DEFAULT_PAGE_SIZE } from '@/constants';
import {
  IContentPerformanceState,
  IContentPerformanceMetrics,
  IFormattedContentPerformanceMetrics,
} from './types';
import { getQueryParams } from '@/utils/request-helpers';

export const name = 'contentPerformance';

const contentDetailsRepository = repositoryFactory.get('contentDetails');
const contentPerformanceRepository = repositoryFactory.get('contentPerformance');
const answerRatingRepository = repositoryFactory.get('answerRating');

const formatMetricsData = (metrics: IContentPerformanceMetrics): IFormattedContentPerformanceMetrics => ({
  totalFallbackCount: formatNumber(metrics.totalFallbackCount),
  overallConfusionRate: formatPercentage(metrics.overallConfusionRate),
  noMessageSentByUser: formatNumber(metrics.noMessageSentByUser),
  totalNoAnswerRatedHelpful: formatNumber(metrics.totalNoAnswerRatedHelpful),
});

const state: IContentPerformanceState = {
  contentDetails: {
    isLoading: false,
    pageSize: DEFAULT_PAGE_SIZE,
    page: 1,
    totalRows: 9, // TODO: should get from server
    contentList: [],
    searchContent: '',
    sortBy: null,
    sortDesc: true,
  },
  metrics: {
    totalFallbackCount: 0,
    overallConfusionRate: 0,
    noMessageSentByUser: 0,
    totalNoAnswerRatedHelpful: 0,
  },
  answerRatingList: [],
  selectedIntentId: null,
};

const getters: GetterTree<IContentPerformanceState, RootState> = {
  metrics: (state) => {
    return formatMetricsData(state.metrics);
  },
};

const mutations: MutationTree<IContentPerformanceState> = {
  setContentDetails(state, { contentList }) {
    state.contentDetails.contentList = contentList;
  },
  setCurrentPage(state, { currentPage }) {
    state.contentDetails.page = currentPage;
  },
  setPageSize(state, { pageSize }) {
    state.contentDetails.pageSize = pageSize;
  },
  setContentDetailsLoading(state, { value }) {
    state.contentDetails.isLoading = value;
  },
  setMetrics(state, {
    totalFallbackCount,
    overallConfusionRate,
    noMessageSentByUser,
    totalNoAnswerRatedHelpful,
  }) {
    state.metrics.totalFallbackCount = totalFallbackCount;
    state.metrics.overallConfusionRate = overallConfusionRate;
    state.metrics.noMessageSentByUser = noMessageSentByUser;
    state.metrics.totalNoAnswerRatedHelpful = totalNoAnswerRatedHelpful;
  },
  setSearchContent(state, { content }) {
    state.contentDetails.searchContent = content;
  },
  setSortBy(state, { sortBy }) {
    state.contentDetails.sortBy = sortBy;
  },
  setSortDesc(state, { sortDesc }) {
    state.contentDetails.sortDesc = sortDesc;
  },
  setListAnswerRating(state, { resultList }) {
    state.answerRatingList = resultList;
  },
  setIntentId(state, id) {
    state.selectedIntentId = id;
  },
  clearIntentId(state) {
    state.selectedIntentId = null;
  },
};

const actions: ActionTree<IContentPerformanceState, RootState> = {
  async getContentDetails({ commit, state }) {
    commit('setContentDetailsLoading', { value: true });

    const params = getQueryParams({
      page: state.contentDetails.page,
      pageSize: state.contentDetails.pageSize,
      searchContent: state.contentDetails.searchContent,
      sortBy: state.contentDetails.sortBy,
      sortDesc: state.contentDetails.sortDesc,
    });
    const response = await contentDetailsRepository.get(params);
    const data = response.data;

    commit('setContentDetails', { contentList: data });
    commit('setContentDetailsLoading', { value: false });
  },
  updateCurrentPage({ commit, dispatch }, { currentPage }) {
    commit('setCurrentPage', { currentPage });
    dispatch('getContentDetails');
  },
  updatePageSize({ commit, dispatch }, { pageSize }) {
    commit('setPageSize', { pageSize });
    dispatch('getContentDetails');
  },
  async getPerformanceData({ commit }) {
    const response = await contentPerformanceRepository.get();
    const { data } = response;

    commit('setMetrics', {
      totalFallbackCount: data.totalFallbackCount,
      overallConfusionRate: data.overallConfusionRate,
      noMessageSentByUser: data.noMessageSentByUser,
      totalNoAnswerRatedHelpful: data.totalNoAnswerRatedHelpful,
    });
  },
  updateSearchContent({ commit, dispatch }, { content }) {
    commit('setSearchContent', { content });
    dispatch('getContentDetails');
  },
  updateSorting({ commit, dispatch }, { sortBy, sortDesc }) {
    commit('setSortBy', { sortBy });
    commit('setSortDesc', { sortDesc });
    dispatch('getContentDetails');
  },
  async getAnswerRatingList({ commit }) {
    const response = await answerRatingRepository.get();
    const { data } = response;

    commit('setListAnswerRating', { resultList: data });
  },
};

export const contentPerformance: Module<IContentPerformanceState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
