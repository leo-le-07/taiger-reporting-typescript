<template>
  <div class="home">
    <div class="main-content-container" v-if="selectedId === null">
      <div class="app-header-page-container">
        <h1>Content Performance</h1>
      </div>
      <div class="metrics-container">
        <ContentPerformanceMetrics />
      </div>
      <!-- <div class="content-details-container">
        <ContentDetailsTable />
      </div>
      <AnswerRatingModal /> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import ContentPerformanceMetrics from '@/components/ContentPerformanceMetrics/index.vue';

import * as contentPerformance from '@/store/modules/content-performance';

const ContentPerformance = namespace(contentPerformance.name);

@Component({
  components: {
    ContentPerformanceMetrics,
  },
})
export default class ContentPerformancePage extends Vue {
  @ContentPerformance.State('selectedIntentId') private selectedId!: number | null;
  @ContentPerformance.Action private getAnswerRatingList!: any;

  private created() {
    this.getAnswerRatingList();
  }
}
</script>

<style lang="scss" scoped>
.content-details-container {
  margin-top: 20px;
}
</style>
