<template>
  <div class="vue-container">
    <CardPlaceholder title="Total No. of Answers rated helpful">
      <div class="display-value" slot="value">
        {{ metrics.totalNoAnswerRatedHelpful }}
      </div>
      <div slot="footer">
        <TextAsLink :onClick="openAnswerRatingModal">View</TextAsLink>
      </div>
    </CardPlaceholder>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import TextAsLink from '@/components/common/TextAsLink.vue';
import CardPlaceholder from './CardPlaceholder.vue';
import { IFormattedContentPerformanceMetrics } from '@/store/modules/content-performance/types';
import * as contentPerformance from '@/store/modules/content-performance';

const ContentPerformance = namespace(contentPerformance.name);

@Component({
  components: {
    CardPlaceholder,
    TextAsLink,
  },
})
export default class NoMessagesSent extends Vue {
  @ContentPerformance.Getter private metrics!: IFormattedContentPerformanceMetrics;

  private openAnswerRatingModal() {
    this.$bvModal.show('answer-rating-modal');
  }
}
</script>