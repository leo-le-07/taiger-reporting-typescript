<template>
  <div class="vue-container">
    <b-row>
      <b-col sm="3">
        <TotalFallbackCount />
      </b-col>
      <b-col sm="3">
        <OverallConfusionRate />
      </b-col>
      <b-col sm="3">
        <NoMessagesSent />
      </b-col>
      <b-col sm="3">
        <TotalNoAnswersRatedHelpful />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import NoMessagesSent from './NoMessagesSent.vue';
import TotalFallbackCount from './TotalFallbackCount.vue';
import OverallConfusionRate from './OverallConfusionRate.vue';
import TotalNoAnswersRatedHelpful from './TotalNoAnswersRatedHelpful.vue';

import * as contentPerformance from '@/store/modules/content-performance';

const ContentPerformance = namespace(contentPerformance.name);

@Component({
  components: {
    NoMessagesSent,
    OverallConfusionRate,
    TotalFallbackCount,
    TotalNoAnswersRatedHelpful,
  },
})
export default class ContentPerformanceMetrics extends Vue {
  @ContentPerformance.Action private getPerformanceData!: any;

  private created() {
    this.getPerformanceData();
  }
}
</script>
