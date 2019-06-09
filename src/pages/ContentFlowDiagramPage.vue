<template>
  <div class="home">
    <div class="app-header-page-container">
      <h1>Flow Diagram</h1>
    </div>
    <div class="metrics-container">
      <ContentFlowDiagramMetrics />
    </div>
    <!-- <div class="chart-container">
      <FlowDiagramChart />
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import ContentFlowDiagramMetrics from '@/components/ContentFlowDiagramMetrics/index.vue';
// import FlowDiagramChart from '@/components/FlowDiagramChart.vue';

import * as breadcrumb from '@/store/modules/breadcrumb';
import * as contentPerformance from '@/store/modules/content-performance';
import * as contentFlowDiagram from '@/store/modules/content-flow-diagram';
import { routeConstants } from '@/constants';
import { IBreadcrumbItem } from '@/store/modules/breadcrumb/types';

const Breadcrumb = namespace(breadcrumb.name);
const ContentPerformance = namespace(contentPerformance.name);
const ContentFlowDiagram = namespace(contentFlowDiagram.name);

@Component({
  components: {
    ContentFlowDiagramMetrics,
  },
})
export default class ContentFlowDiagramPage extends Vue {
  @Breadcrumb.Mutation('setItems') private setBreadcrumbItems!: (items: IBreadcrumbItem[]) => void;
  @Breadcrumb.Mutation('clearItems') private clearBreadcrumbItems!: () => void;

  @ContentPerformance.Mutation private setIntentId!: (id: number) => void;
  @ContentPerformance.Mutation private clearIntentId!: () => void;

  @ContentFlowDiagram.Action private getFlowDiagramData!: () => void;

  private created() {
    this.setBreadcrumbItems([
      {
        text: routeConstants.contentPerformance.title,
        to: { name: routeConstants.contentPerformance.name },
      },
      {
        text: routeConstants.contentFlowDiagram.title,
        active: true,
      },
    ]);
    this.setIntentId(parseInt(this.$route.params.id, 10));
    this.getFlowDiagramData();
  }

  // @ts-ignore
  private beforeRouteLeave(to, from, next) {
    this.clearIntentId();
    this.clearBreadcrumbItems();
    next();
  }
}
</script>
