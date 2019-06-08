import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { repositoryFactory } from '@/apis/repository-factory';
import { RootState } from '@/types';
import { IChatbotPerformance as IChatbotPerformanceState } from './types';
import { formatNumber, formatPercentage } from '@/utils/number-formatter';

export const name = 'chatbotPerformance';

const chatbotPerformanceRepository = repositoryFactory.get('chatbotPerformance');

const state: IChatbotPerformanceState = {
  totalUsers: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  chatbotRating: {
    value: 0,
    total: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  avgSessionDuration: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  goalCompletion: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  goalConversionRate: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  deflectionRate: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  totalFallbackCount: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  overallConfusion: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
  chatbotActivation: {
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0,
  },
};

const getters: GetterTree<IChatbotPerformanceState, RootState> = {
  totalUsers: (state) => {
    return {
      ...state.totalUsers,
      value: formatNumber(state.totalUsers.value),
      percentageValue: formatPercentage(state.totalUsers.percentageValue),
    };
  },
  chatbotRating: (state) => {
    return {
      ...state.chatbotRating,
      value: formatNumber(state.chatbotRating.value, '0,0.00[00]'),
      percentageValue: formatPercentage(state.chatbotRating.percentageValue),
    };
  },
  avgSessionDuration: (state) => {
    return {
      ...state.avgSessionDuration,
      percentageValue: formatPercentage(state.avgSessionDuration.percentageValue),
    };
  },
  goalCompletion: (state) => {
    return {
      ...state.goalCompletion,
      value: formatNumber(state.goalCompletion.value),
      percentageValue: formatPercentage(state.goalCompletion.percentageValue),
    };
  },
  goalConversionRate: (state) => {
    return {
      ...state.goalConversionRate,
      value: formatPercentage(state.goalConversionRate.value),
      percentageValue: formatPercentage(state.goalConversionRate.percentageValue),
    };
  },
  deflectionRate: (state) => {
    return {
      ...state.deflectionRate,
      value: formatPercentage(state.deflectionRate.value),
      percentageValue: formatPercentage(state.deflectionRate.percentageValue),
    };
  },
  totalFallbackCount: (state) => {
    return {
      ...state.totalFallbackCount,
      value: formatNumber(state.totalFallbackCount.value),
      percentageValue: formatPercentage(state.totalFallbackCount.percentageValue),
    };
  },
  overallConfusion: (state) => {
    return {
      ...state.overallConfusion,
      value: formatPercentage(state.overallConfusion.value),
      percentageValue: formatPercentage(state.overallConfusion.percentageValue),
    };
  },
  chatbotActivation: (state) => {
    return {
      ...state.chatbotActivation,
      value: formatPercentage(state.chatbotActivation.value),
      percentageValue: formatPercentage(state.chatbotActivation.percentageValue),
    };
  },
};

const mutations: MutationTree<IChatbotPerformanceState> = {
  setPerformanceData(state, {
    totalUsers,
    chatbotRating,
    avgSessionDuration,
    goalCompletion,
    goalConversionRate,
    deflectionRate,
    totalFallbackCount,
    overallConfusion,
    chatbotActivation,
  }) {
    state.totalUsers = totalUsers;
    state.chatbotRating = chatbotRating;
    state.avgSessionDuration = avgSessionDuration;
    state.goalCompletion = goalCompletion;
    state.goalConversionRate = goalConversionRate;
    state.deflectionRate = deflectionRate;
    state.totalFallbackCount = totalFallbackCount;
    state.overallConfusion = overallConfusion;
    state.chatbotActivation = chatbotActivation;
  },
};

const actions: ActionTree<IChatbotPerformanceState, RootState> = {
  async getPerformanceData({ commit }) {
    const response = await chatbotPerformanceRepository.get();
    const { data } = response;

    commit('setPerformanceData', {
      totalUsers: data.totalUsers,
      chatbotRating: data.chatbotRating,
      avgSessionDuration: data.avgSessionDuration,
      goalCompletion: data.goalCompletion,
      goalConversionRate: data.goalConversionRate,
      deflectionRate: data.deflectionRate,
      totalFallbackCount: data.totalFallbackCount,
      overallConfusion: data.overallConfusion,
      chatbotActivation: data.chatbotActivation,
    });
  },
};

export const chatbotPerformance: Module<IChatbotPerformanceState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
