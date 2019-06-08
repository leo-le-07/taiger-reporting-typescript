<template>
  <div class="vue-container">
    <div class="header-container">
      {{ title }}
      <span class="info-icon">
        <font-awesome-icon :icon="infoIcon" />
      </span>
    </div>
    <div class="content-container">
      <div class="value">
        <slot name="value" />
      </div>
      <div
        class="percentage-container"
        :class="{ 'up-percentage': isPositivePercentage, 'down-percentage': !isPositivePercentage }"
      >
        <span class="indicator-icon">
          <font-awesome-icon :icon="isPositivePercentage ? upIcon : downIcon" />
        </span>
        {{ percentageValue }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  faInfoCircle,
  faCaretUp,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

@Component
export default class CardPlaceholder extends Vue {
  @Prop() private percentageValue!: number;
  @Prop() private isPositivePercentage!: boolean;
  @Prop() private title!: string;

  private infoIcon = faInfoCircle;
  private upIcon = faCaretUp;
  private downIcon = faCaretDown;
}
</script>

<style lang="scss" scoped>
.vue-container {
  padding: 20px;
  border: 1px solid $borderGray500;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    box-shadow: $hoverBoxShadow;
  }
}

.header-container {
  font-size: $fontSizeNormal;
  font-weight: 500;
  color: $gray500;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.value {
  font-size: $fontSizeLarge36;
  color: $black500;
}

.info-icon {
  color: $green500;
  margin-left: 10px;
}

.content-container {
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.percentage-container {
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-size: $fontSizeLarge18;
  font-weight: bold;
}

.indicator-icon {
  margin-right: 5px;
}

.up-percentage {
  color: $green500;
}

.down-percentage {
  color: $red500;
}
</style>
