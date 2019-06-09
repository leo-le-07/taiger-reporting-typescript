import Vue from 'vue';
import Router from 'vue-router';

import OverviewPage from '@/pages/OverviewPage.vue';
import ContentPerformancePage from '@/pages/ContentPerformancePage.vue';
import ContentFlowDiagramPage from '@/pages/ContentFlowDiagramPage.vue';
import ContentConversationsPage from '@/pages/ContentConversationsPage.vue';

import { routeConstants } from '@/constants';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: routeConstants.overview.path,
      name: routeConstants.overview.name,
      component: OverviewPage,
    },
    {
      path: routeConstants.contentPerformance.path,
      name: routeConstants.contentPerformance.name,
      component: ContentPerformancePage,
      children: [
        {
          path: routeConstants.contentFlowDiagram.path,
          name: routeConstants.contentFlowDiagram.name,
          component: ContentFlowDiagramPage,
        },
        {
          path: routeConstants.contentConversations.path,
          name: routeConstants.contentConversations.name,
          component: ContentConversationsPage,
        },
      ],
    },
  ],
});
