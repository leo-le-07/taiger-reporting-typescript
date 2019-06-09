<template>
  <div class="vue-container">
    <span class="search-icon">
      <SearchIcon />
    </span>
    <b-form-input
      :maxlength="maxLength"
      class="custom-form-input-control"
      placeholder="Search"
      v-model="content"
      @keypress.enter.stop="handleEnter"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import SearchIcon from '@/assets/search.svg';

const MAX_LENGTH = 100;

@Component({
  components: {
    SearchIcon,
  },
})
export default class Search extends Vue {
  private content = '';
  private maxLength = MAX_LENGTH;

  @Prop() private onChange!: (content: string) => void;

  private handleEnter() {
    this.onChange(this.content);
  }
}
</script>

<style lang="scss" scoped>
.vue-container {
  position: relative;
  width: 280px;

  input.custom-form-input-control {
    padding-right: 2.375rem;
  }

  input[type="text"] {
    font-size: $fontSizeSmall14;

    &::placeholder {
      color: $gray300;
    }
  }

  span.search-icon {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    top: 5px;
    text-align: center;
    pointer-events: none;
    color: $black500;
    right: 0;
  }
}
</style>
