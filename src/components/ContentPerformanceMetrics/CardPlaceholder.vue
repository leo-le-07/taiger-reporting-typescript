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
    </div>
    <div class="footer-container">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component
export default class CardPlaceholder extends Vue {
  private infoIcon = faInfoCircle;

  @Prop() private title!: string;
}
</script>

<style lang="scss" scoped>
.vue-container {
  padding: 20px 20px 5px;
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
  font-size: $fontSizeSmall14;
  font-weight: 500;
  color: $gray500;
  display: flex;
  margin-bottom: 10px;
  min-height: 42px;
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

.footer-container {
  display: flex;
  justify-content: flex-end;
  min-height: 24px;
  font-size: $fontSizeSmall14;
}
</style>
