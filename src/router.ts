import Vue from 'vue';
import Router from 'vue-router';

import Overview from '@/pages/Overview.vue';
import ContentPerformance from '@/pages/ContentPerformance.vue';

import { routeConstants } from '@/constants';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: routeConstants.overview.path,
      name: routeConstants.overview.name,
      component: Overview,
    },
    {
      path: routeConstants.contentPerformance.path,
      name: routeConstants.contentPerformance.name,
      component: ContentPerformance,
    },
  ],
});
