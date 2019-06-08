<template>
  <div class="vue-container">
    <CardPlaceholder
      title="Chatbot Rating"
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
export default class ChatbotRating extends Vue {
  @ChatbotPerformance.Getter('chatbotRating') private data!: IChatbotPerformance;
}
</script>