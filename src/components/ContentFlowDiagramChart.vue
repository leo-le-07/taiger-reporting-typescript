<template>
  <div class="vue-container">
    <div id="flow-diagram"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import Anychart, { Sankey } from 'anychart';

import { formatPercentage } from '@/utils/number-formatter';

@Component
export default class ContentFlowDiagramChart extends Vue {
  private mounted() {
    const total = 200;

    const data = [
      {
        nodeId: 1,
        from: 'Hi, what are you looking for',
        to: 'Find out more about product',
        weight: 64,
      },
      {
        nodeId: 2,
        from: 'Hi, what are you looking for',
        to: 'Any promotion?',
        weight: 24,
      },
      {
        nodeId: 3,
        from: 'Hi, what are you looking for',
        to: 'Just looking around',
        weight: 46,
      },
      {
        nodeId: 4,
        from: 'Hi, what are you looking for',
        to: null,
        weight: 66,
      },
    ];

    const chart: Sankey = Anychart.sankey(data);

    // Node configurations
    chart.nodeWidth(162);
    chart
      .node()
      .normal()
      .labels()
      .wordWrap('break-word')
      .fontSize(14)
      .useHtml(true)
      .format(function(this: Sankey) {
        return `
          <span>
            ${this.name}
          </span>
          <br>
          ${this.value}
        `;
      });

    // Dropoff configurations
    chart.dropoff().labels().format(function(this: Sankey) {
      return formatPercentage(this.value / total);
    });
    chart.dropoff().normal().labels().enabled(true);

    // Flow configurations
    chart
      .flow()
      .labels()
      .enabled(true)
      .format(function(this: Sankey) {
        return formatPercentage(this.value / total);
      })
      .positionFormatter(function(this: Sankey) {
        return {
          x: this.value.x,
          y: this.value.y + 25,
        };
      });

    chart.container('flow-diagram');
    chart.draw();
  }
}
</script>

<style lang="scss" scoped>
#flow-diagram {
  height: 500px;
}
</style>