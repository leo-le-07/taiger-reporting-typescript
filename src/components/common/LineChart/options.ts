import isNil from 'lodash/isNil';

import {
  ChartTooltipItem,
  ChartData,
} from 'chart.js';

import { fontSizes, colors, fontFamilyDefault } from '@/constants';

export default {
  elements: {
    line: {
      tension: 0,
    },
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
      ticks: {
        fontFamily: fontFamilyDefault,
        fontColor: colors.black500,
        fontSize: fontSizes.small14,
      },
    }],
    yAxes: [{
      ticks: {
        padding: 2,
        fontFamily: fontFamilyDefault,
        fontColor: colors.gray500,
        fontSize: fontSizes.small14,
      },
    }],
  },
  tooltips: {
    enabled: false,
    mode: 'point',
    position: 'nearest',
    displayColors: true,
    callbacks: {
      label(tooltipItem: ChartTooltipItem, data: ChartData) {
        const { datasetIndex } = tooltipItem;

        if (isNil(datasetIndex) || isNil(data.datasets)) return '';

        const legendLabel = data.datasets[datasetIndex].label;

        return legendLabel;
      },
      afterLabel(tooltipItem: ChartTooltipItem) {
        // @ts-ignore
        return tooltipItem.value;
      },
    },
    custom(tooltip: any) {
      // Ref: https://github.com/chartjs/Chart.js/blob/master/samples/tooltips/custom-line.html
      // Tooltip Element
      let tooltipEl = document.getElementById('chartjs-tooltip');

      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = '<table></table>';
        // @ts-ignore
        this._chart.canvas.parentNode.appendChild(tooltipEl);
      }
      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = '0';
        return;
      }
      // Set caret Position
      tooltipEl.classList.add('custom-chartjs-tooltip');
      tooltipEl.classList.remove('above', 'below', 'no-transform');
      if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
      } else {
        tooltipEl.classList.add('no-transform');
      }

      // Set Text
      if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyList = tooltip.body;
        let innerHtml = '<thead>';
        titleLines.forEach((title: string) => {
          innerHtml += `<tr><th>${title}</th></tr>`;
        });
        innerHtml += '</thead><tbody>';
        bodyList.forEach((body: any, i: number) => {
          const legendLabel = body.lines;
          const colors = tooltip.labelColors[i];
          const style = `
                    color: ${colors.borderColor};
                    margin-left: 15px;
                  `;
          const value = `<span style="${style}">${body.after}</span>`;
          innerHtml += `<tr><td>${legendLabel} ${value}</td></tr>`;
        });
        innerHtml += '</tbody>';
        const tableRoot = tooltipEl.querySelector('table');
        tableRoot!.innerHTML = innerHtml;
      }
      // @ts-ignore
      const positionY = this._chart.canvas.offsetTop;
      // @ts-ignore
      const positionX = this._chart.canvas.offsetLeft;
      // Display, position, and set styles for font
      tooltipEl.style.opacity = '1';
      tooltipEl.style.left = positionX + tooltip.caretX + 'px';
      tooltipEl.style.top = positionY + tooltip.caretY + 'px';
      tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
      tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
      tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
      tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
    },
  },
  legend: {
    display: false,
  },
  responsive: true,
  maintainAspectRatio: false,
};
