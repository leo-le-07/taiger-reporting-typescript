<script>
import { Line, mixins } from 'vue-chartjs';

import options from './options';

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
    },
    options: {
      type: Object,
      default() {
        return {
          ...options,
        };
      },
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

<style lang="scss">
.custom-chartjs-tooltip {
  opacity: 1;
  position: absolute;
  background: $white;
  color: $gray600;
  border-radius: 3px;
  transition: all .1s ease;
  pointer-events: none;
  transform: translate(-50%, calc(-100% - 10px));
  box-shadow: $boxShadowBlack;

  table {
    th {
      text-align: left;
      font-size: 8px;
      line-height: 12px;
      font-weight: 500;
      font-style: normal;
      text-transform: uppercase;
    }

    td {
      text-align: left;
      font-size: 9px;
      line-height: 24px;
      font-weight: normal;
      font-style: normal;
    }
  }
}
</style>
