<template>
  <div class="vue-container">
    <div class="content-container" :class="{ collapsed: isCollapsed }">
      <b-container>
        <!-- <Breadcrumb /> -->
        <router-view/>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Overview extends Vue {
  private isCollapsed: boolean = false;

  public toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
</script>


<style lang="scss" scoped>
.vue-container {
  display: flex;
}

.content-container {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 280px;
  transition: .3s ease;
  width: 100%;

  &.collapsed {
    margin-left: 80px;
    transition: .3s ease;
  }
}
</style>
