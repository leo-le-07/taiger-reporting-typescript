<template>
  <span v-on="onClick && { click: onClick }">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TextAsLink extends Vue {
  @Prop() private onClick!: () => void;
}
</script>

<style lang="scss" scoped>
span {
  color: $primary;

  &:hover {
    cursor: pointer;
  }
}
</style>
