import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { repositoryFactory } from '@/apis/repository-factory';
import { RootState } from '@/types';
import { IContentFlowDiagramState, IFormattedMetrics, IMetrics } from './types';
import { formatNumber, formatPercentage } from '@/utils/number-formatter';

export const name = 'contentFlowDiagram';

const contentFlowDiagramRepository = repositoryFactory.get('contentFlowDiagram');

const formatMetrics = (metrics: IMetrics): IFormattedMetrics => ({
  timesAsked: formatNumber(metrics.timesAsked),
  flowCompletionRate: formatPercentage(metrics.flowCompletionRate),
  fallbackCount: formatNumber(metrics.fallbackCount),
  confusionRate: formatPercentage(metrics.confusionRate),
  dropoffRate: formatPercentage(metrics.dropoffRate),
  positiveRating: formatNumber(metrics.positiveRating),
});

const state: IContentFlowDiagramState = {
  name: '',
  metrics: {
    timesAsked: 0,
    flowCompletionRate: 0,
    fallbackCount: 0,
    confusionRate: 0,
    dropoffRate: 0,
    positiveRating: 0,
  },
};

const getters: GetterTree<IContentFlowDiagramState, RootState> = {
  metrics: (state) => formatMetrics(state.metrics),
};

const mutations: MutationTree<IContentFlowDiagramState> = {
  setMetricsData(state, {
    timesAsked,
    flowCompletionRate,
    fallbackCount,
    confusionRate,
    dropoffRate,
    positiveRating,
  }) {
    state.metrics.timesAsked = timesAsked;
    state.metrics.flowCompletionRate = flowCompletionRate;
    state.metrics.fallbackCount = fallbackCount;
    state.metrics.confusionRate = confusionRate;
    state.metrics.dropoffRate = dropoffRate;
    state.metrics.positiveRating = positiveRating;
  },
  setIntentName(state, { name }) {
    state.name = name;
  },
};

const actions: ActionTree<IContentFlowDiagramState, RootState> = {
  async getFlowDiagramData({ commit, rootState }) {
    const response = await contentFlowDiagramRepository.get({
      id: rootState.contentPerformance.selectedIntentId,
    });
    const { data } = response;

    commit('setMetricsData', {
      timesAsked: data.metrics.timesAsked,
      flowCompletionRate: data.metrics.flowCompletionRate,
      fallbackCount: data.metrics.fallbackCount,
      confusionRate: data.metrics.confusionRate,
      dropoffRate: data.metrics.dropoffRate,
      positiveRating: data.metrics.positiveRating,
    });
    commit('setIntentName', { name: data.name });
  },
};

export const contentFlowDiagram: Module<IContentFlowDiagramState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
