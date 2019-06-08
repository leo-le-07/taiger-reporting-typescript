import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import moment from 'moment';
import sortBy from 'lodash/sortBy';

import { repositoryFactory } from '@/apis/repository-factory';
import { RootState } from '@/types';
import { IChatbotUsersChart, TimeType, IChatbotUsersState } from './types';
import { DD_MM } from '@/utils/date-formatter';

export const name = 'chatbotUsers';

const chatbotUsersRepository = repositoryFactory.get('chatbotUsers');

const formatChartData = (chartData: IChatbotUsersChart[]) => {
  const sortedChartData = sortBy(chartData, 'date');

  const labels = sortedChartData.map((item) => moment(item.date).format(DD_MM));
  const datasets = [
    {
      label: 'New users',
      fill: false,
      pointBackgroundColor: 'rgba(236, 95, 51, 0.7)',
      pointRadius: 5,
      borderColor: '#EC5F33',
      borderWidth: 1,
      data: sortedChartData.map((item) => item.newUsers),
    },
    {
      label: 'Returning users',
      fill: false,
      pointBackgroundColor: 'rgba(26, 179, 148, 0.7)',
      pointRadius: 5,
      borderColor: '#1AB394',
      borderWidth: 1,
      data: sortedChartData.map((item) => item.returningUsers),
    },
    {
      label: 'Total users',
      fill: false,
      pointBackgroundColor: 'rgba(2, 117, 216, 0.7)',
      pointRadius: 5,
      borderColor: '#0275D8',
      borderWidth: 1,
      data: sortedChartData.map((item) => item.totalUsers),
    },
  ];

  return {
    labels,
    datasets,
  };
};

const state: IChatbotUsersState = {
  timeType: 'day',
  chartData: [],
};

const getters: GetterTree<IChatbotUsersState, RootState> = {
  chartData: (state) => {
    return formatChartData(state.chartData);
  },
};

const mutations: MutationTree<IChatbotUsersState> = {
  setChartData(state, chartData: IChatbotUsersChart[]) {
    state.chartData = chartData;
  },
  setTimeType(state, timeType: TimeType) {
    state.timeType = timeType;
  },
};

const actions: ActionTree<IChatbotUsersState, RootState> = {
  async getChartData({ commit, state }): Promise<void> {
    const response = await chatbotUsersRepository.get({
      timeType: state.timeType,
    });
    const { data } = response;

    commit('setChartData', data);
  },
  async updateTimeType({ commit, dispatch }, timeType: TimeType) {
    commit('setTimeType', timeType);
    dispatch('getChartData');
  },
};

export const chatbotUsers: Module<IChatbotUsersState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
