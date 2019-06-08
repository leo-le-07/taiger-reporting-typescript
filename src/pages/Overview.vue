<template>
  <div class="home">
    <div class="app-header-page-container">
      <h1>Overview</h1>
    </div>
    <div class="chart-container">
      <ChatbotUsersChart />
    </div>
    <div class="performance-container">
      <ChatbotPerformanceMetrics />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import ChatbotUsersChart from '@/components/ChatbotUsersChart.vue';
import ChatbotPerformanceMetrics from '@/components/ChatbotPerformanceMetrics/index.vue';

@Component({
  components: {
    ChatbotUsersChart,
    ChatbotPerformanceMetrics,
  },
})
export default class Overview extends Vue {}
</script>

<style lang="scss" scoped>
.chart-container {
  border: 1px solid $borderGray500;
  border-radius: 4px;
  padding: 20px;
}

.performance-container {
  margin-top: 40px;
}
</style>