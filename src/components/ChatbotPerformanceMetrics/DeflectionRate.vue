<template>
  <div class="vue-container">
    <CardPlaceholder
      title="Deflection Rate"
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
import { Component, Vue } from 'vue-property-decorator';
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
export default class DeflectionRate extends Vue {
  @ChatbotPerformance.Getter('deflectionRate') private data!: IChatbotPerformance;
}
</script>