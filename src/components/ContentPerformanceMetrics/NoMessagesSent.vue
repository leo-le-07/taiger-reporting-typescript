<template>
  <div class="vue-container">
    <CardPlaceholder title="No. of Messages Sent by User">
      <div class="display-value" slot="value">
        {{ metrics.noMessageSentByUser }}
      </div>
    </CardPlaceholder>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import CardPlaceholder from './CardPlaceholder.vue';
import { IFormattedContentPerformanceMetrics } from '@/store/modules/content-performance/types';
import * as contentPerformance from '@/store/modules/content-performance';

const ContentPerformance = namespace(contentPerformance.name);

@Component({
  components: {
    CardPlaceholder,
  },
})
export default class NoMessagesSent extends Vue {
  @ContentPerformance.Getter private metrics!: IFormattedContentPerformanceMetrics;
}
</script>