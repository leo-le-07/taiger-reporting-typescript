import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { IBreadcrumbState } from './types';
import { RootState } from '@/types';

export const name = 'breadcrumb';

const state: IBreadcrumbState = {
  items: [],
};

const mutations: MutationTree<IBreadcrumbState> = {
  setItems(state, items) {
    state.items = items;
  },
  clearItems(state) {
    state.items = [];
  },
};

export const breadcrumb: Module<IBreadcrumbState, RootState> = {
  namespaced: true,
  state,
  mutations,
};
