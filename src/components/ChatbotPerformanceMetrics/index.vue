<template>
  <div class="vue-container">
    <b-row>
      <b-col>
        <h3>Chatbot Performance</h3>
        <div class="sub-title">Compared to last 7 days</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <TotalUsers />
      </b-col>
      <b-col sm="4">
        <ChatbotRating />
      </b-col>
      <b-col sm="4">
        <AvgSessionDuration />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <GoalCompletion />
      </b-col>
      <b-col sm="4">
        <GoalConversionRate />
      </b-col>
      <b-col sm="4">
        <DeflectionRate />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <TotalFallbackCount />
      </b-col>
      <b-col sm="4">
        <OverallConfusion />
      </b-col>
      <b-col sm="4">
        <ChatbotActivation />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

import TotalUsers from './TotalUsers.vue';
import AvgSessionDuration from './AvgSessionDuration.vue';
import ChatbotActivation from './ChatbotActivation.vue';
import ChatbotRating from './ChatbotRating.vue';
import DeflectionRate from './DeflectionRate.vue';
import GoalCompletion from './GoalCompletion.vue';
import GoalConversionRate from './GoalConversionRate.vue';
import OverallConfusion from './OverallConfusion.vue';
import TotalFallbackCount from './TotalFallbackCount.vue';

import * as chatbotPerformance from '@/store/modules/chatbot-performance';

const ChatbotPerformance = namespace(chatbotPerformance.name);

@Component({
  components: {
    TotalUsers,
    AvgSessionDuration,
    ChatbotActivation,
    ChatbotRating,
    DeflectionRate,
    GoalCompletion,
    GoalConversionRate,
    OverallConfusion,
    TotalFallbackCount,
  },
})
export default class ChatbotPerformanceMetrics extends Vue {
  @ChatbotPerformance.Action private getPerformanceData!: any;

  private created() {
    this.getPerformanceData();
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    margin: 0;
    color: $black500;
  }

  .sub-title {
    font-size: $fontSizeSmall10;
    font-weight: normal;
    color: $gray500;
  }
</style>
