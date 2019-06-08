<template>
  <div class="vue-container">
    <CardPlaceholder
      title="Avg. Session Duration"
      :isPositivePercentage="data.isPositivePercentage"
      :percentageValue="data.percentageValue"
    >
      <div class="display-value" slot="value">
        {{ data.value }}
      </div>
    </CardPlaceholder>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

import CardPlaceholder from './CardPlaceholder.vue';

import { IChatbotPerformance } from '@/store/modules/chatbot-performance/types';
import * as chatbotPerformance from '@/store/modules/chatbot-performance';

const ChatbotPerformance = namespace(chatbotPerformance.name);

@Component({
  components: {
    CardPlaceholder,
  },
})
export default class AvgSessionDuration extends Vue {
  @ChatbotPerformance.Getter('avgSessionDuration') private data!: IChatbotPerformance;
}
</script>