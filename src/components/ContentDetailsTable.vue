<template>
  <div class="vue-container">
    <b-row>
      <b-col class="header-container">
        <h3>Content Details</h3>
        <!-- <div class="search-container">
          <Search :onChange="updateSearch" />
        </div> -->
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          bordered
          borderless
          no-local-sorting
          table-class="app-table"
          thead-class="app-thead"
          tbody-tr-class="app-tbody-tr"
          :busy="isLoading"
          :fields="fields"
          :items="items"
          @sort-changed="sortingChanged"
        >
          <div slot="table-busy">
            <Loading />
          </div>
          <template slot="HEAD_confusionRate" slot-scope="data">
            <div class="confusion-rate-header-container">
              {{ data.label }}
              <span class="info-icon"><font-awesome-icon :icon="icons.information" /></span>
            </div>
          </template>
          <!-- <template slot="action" slot-scope="data">
            <div class="action-container">
              <router-link
                tag="a"
                :to="{
                  name: routeConstants.contentFlowDiagram.name,
                  params: { id: data.item.id }
                }"
                append
                class="action-item"
              >
                View Flow Diagram
              </router-link>
              <router-link
                tag="a"
                :to="{
                  name: routeConstants.contentConversations.name,
                  params: { id: data.item.id }
                }"
                append
                class="action-item"
              >
                View Conversations
              </router-link>
            </div>
          </template> -->
        </b-table>
        <div class="pagination-container">
          <PaginationGroup
            :totalRows="totalRows"
            :pageSize="pageSize"
            :currentPage="currentPage"
            :changePage="changePage"
            :selectPageSize="selectPageSize"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { namespace } from 'vuex-class';

import PaginationGroup from '@/components/common/PaginationGroup.vue';
// import Search from '@/components/common/Search.vue';
import Loading from '@/components/common/Loading.vue';

import { routeConstants } from '@/constants';
import * as contentPerformance from '@/store/modules/content-performance';
import { IContent } from '@/store/modules/content-performance/types';

const ContentPerformance = namespace(contentPerformance.name);

@Component({
  components: {
    PaginationGroup,
    Loading,
    // Search,
  },
})
export default class ContentDetailsTable extends Vue {
  private fields = [
    {
      key: 'id',
      label: 'ID',
    },
    'intent',
    {
      key: 'timesAsked',
      label: 'Times Asked',
      sortable: true,
    },
    {
      key: 'fallbackCount',
      label: 'Fallback Count',
      sortable: true,
    },
    {
      key: 'confusionRate',
      label: 'Confusion Rate',
      sortable: true,
    },
    {
      key: 'dropoffRate',
      label: 'Dropoff Rate',
      sortable: true,
    },
    {
      key: 'action',
      label: 'Action',
      thClass: 'header__width-300px',
    },
  ];
  private icons = {
    information: faInfoCircle,
  };
  private sortBy: string | null = null;
  private sortDesc = true;
  private routeConstants = routeConstants;

  @ContentPerformance.State((state) => state.contentDetails.contentList) private items!: IContent[];
  @ContentPerformance.State((state) => state.contentDetails.isLoading) private isLoading!: boolean;
  @ContentPerformance.State((state) => state.contentDetails.page) private currentPage!: number;
  @ContentPerformance.State((state) => state.contentDetails.pageSize) private pageSize!: number;
  @ContentPerformance.State((state) => state.contentDetails.totalRows) private totalRows!: number;

  @ContentPerformance.Action private updateCurrentPage!: any;
  @ContentPerformance.Action private updatePageSize!: any;
  @ContentPerformance.Action private updateSearchContent!: any;
  @ContentPerformance.Action private updateSorting!: any;
  @ContentPerformance.Action private getContentDetails!: any;

  private changePage(pageNumber: number) {
    this.updateCurrentPage({ currentPage: pageNumber });
  }

  private selectPageSize(value: number) {
    this.updatePageSize({ pageSize: value });
  }

  private updateSearch(content: string) {
    this.updateSearchContent({ content });
  }

  private sortingChanged(context: { sortBy: null | string, sortDesc: boolean }) {
    this.updateSorting({
      sortBy: context.sortBy,
      sortDesc: context.sortDesc,
    });
  }

  private created() {
    this.getContentDetails();
  }
}
</script>

<style lang="scss">
.app-dropdown-container {
  .btn.dropdown-toggle.btn-secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $fontSizeSmall14;
    width: 40px;
    height: 25px;
    padding: 0;
    border-color: $gray200;
    background-color: $white;
    color: $black500;
    border-radius: 4px;

    &:focus {
      box-shadow: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

h3 {
  color: $black500;
}

.pagination-container {
  margin-top: 40px;
}

.action-container {
  .action-item {
    margin-right: 10px;
  }
}

.confusion-rate-header-container {
  .info-icon {
    color: $green500;
    position: absolute;
    top: 3px;
  }
}
</style>
