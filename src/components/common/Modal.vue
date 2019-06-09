<template>
  <b-modal
    :title="title"
    :id="id"
    dialog-class="app-modal-dialog"
    header-class="app-modal-header"
    body-class="app-modal-body"
    no-close-on-backdrop
    no-close-on-esc
    :scrollable="isScrollable"
    size="lg"
  >
    <template slot="default">
      <slot name="content" />
    </template>
    <template slot="modal-footer" slot-scope="{ close }">
      <b-button
        class="app-modal-footer-button"
        variant="outline-secondary"
      >
        Export
      </b-button>
      <b-button
        class="app-modal-footer-button"
        variant="outline-secondary"
        @click="close()"
      >Close</b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  @Prop() private id!: string;
  @Prop() private title!: string;
  @Prop({ default: true }) private isScrollable!: boolean;
}
</script>

<style lang="scss">
.app-modal-dialog {
  .app-modal-header {
    .modal-title {
      font-size: $fontSizeLarge20;
      color: $black500;
    }

    .close {
      font-size: $fontSizeLarge18;
      color: rgba(0, 0, 0, 0.2);
    }
  }

  .app-modal-footer-button.btn-outline-secondary {
    border-color: $gray200;
    font-size: $fontSizeSmall14;
  }
}
</style>
