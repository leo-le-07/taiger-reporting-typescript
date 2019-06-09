<template>
  <div class="vue-container">
    <b-breadcrumb :items="items" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import * as breadcrumb from '@/store/modules/breadcrumb';
import { IBreadcrumbItem } from '@/store/modules/breadcrumb/types';

const Breadcrumb = namespace(breadcrumb.name);

@Component
export default class NoMessagesSent extends Vue {
  @Breadcrumb.State private items!: IBreadcrumbItem[];
}
</script>

<style lang="scss" scoped>
  .breadcrumb {
    background-color: transparent;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    min-height: 30px;
    font-size: $fontSizeSmall14;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    content: ">";
  }
</style>
