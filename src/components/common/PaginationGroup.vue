<template>
  <div class="vue-container">
    <div class="summary-container">
      {{ summaryPageRange }} of {{ totalRows }}
    </div>
    <b-pagination
      hide-goto-end-buttons
      next-text="Next"
      prev-text="Previous"
      :total-rows="totalRows"
      :per-page="pageSize"
      :value="currentPage"
      @change="changePage"
    />
    <div class="rows-page-container">
      <div class="label">Rows per page</div>
      <div class="app-dropdown-container">
        <b-dropdown :text="pageSize.toString()" right>
          <b-dropdown-item
            v-for="value in rowsPerPageOptions"
            :active="pageSize === value"
            :key="value"
            @click="selectPageSize(value)"
          >
            {{ value }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PaginationGroup extends Vue {
  private rowsPerPageOptions = [5, 10, 20, 50, 100];

  @Prop() private readonly totalRows!: number;
  @Prop() private readonly pageSize!: number;
  @Prop() private readonly currentPage!: number;
  @Prop() private readonly changePage!: () => void;
  @Prop() private readonly selectPageSize!: () => void;

  private get summaryPageRange() {
    const fromNumber = (this.currentPage - 1) * this.pageSize + 1;
    const toNumber = Math.min(this.totalRows, this.currentPage * this.pageSize);
    return `${fromNumber} - ${toNumber}`;
  }
}
</script>

<style lang="scss">
.pagination {
  margin-bottom: 0;
}

.page-item.active {
  .page-link {
    background: $primary;
  }
}

.page-item.disabled {
  .page-link {
    color: $gray600;
  }
}

.page-link {
  font-size: $fontSizeSmall14;
  border-style: none;
  color: $primary;

  &:focus {
    box-shadow: none;
  }
}
</style>

<style lang="scss" scoped>
.vue-container {
  display: flex;
  justify-content: space-between;
}
.summary-container, .rows-page-container {
  color: $gray300;
  font-size: $fontSizeSmall12;
}

.rows-page-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    margin-right: 10px;
  }
}
</style>
