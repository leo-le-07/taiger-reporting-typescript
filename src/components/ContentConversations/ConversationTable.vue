<template>
  <div class="vue-container">
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
        >
          <div slot="table-busy">
            <Loading />
          </div>
          <template slot="action" slot-scope="data">
            <div class="action-container">
              <TextAsLink :onClick="openHistoryModal(data.item.referenceId)">View</TextAsLink>
            </div>
          </template>
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
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import moment from 'moment';

import Loading from '@/components/common/Loading.vue';
import PaginationGroup from '@/components/common/PaginationGroup.vue';
import TextAsLink from '@/components/common/TextAsLink.vue';

import { DD_MM_YYYY_HH_MM, displayDate, getDuration } from '@/utils/date-formatter';
import { IConversationDetails } from '@/store/modules/content-conversations/types';
import * as contentConversations from '@/store/modules/content-conversations';

const ContentConversations = namespace(contentConversations.name);

@Component({
  components: {
    PaginationGroup,
    TextAsLink,
    Loading,
  },
})
export default class ConversationTable extends Vue {
  @ContentConversations.State((state) =>
    state.conversationTableManagement.isLoading) private isLoading!: boolean;
  @ContentConversations.State((state) =>
    state.conversationTableManagement.page) private currentPage!: number;
  @ContentConversations.State((state) =>
    state.conversationTableManagement.pageSize) private pageSize!: number;
  @ContentConversations.State((state) =>
    state.conversationTableManagement.totalRows) private totalRows!: number;
  @ContentConversations.State((state) =>
    state.conversationTableManagement.contentList) private items!: IConversationDetails[];

  @ContentConversations.Action private updateCurrentPage!: (value: number) => void;
  @ContentConversations.Action private updatePageSize!: (value: number) => void;
  @ContentConversations.Action private getContentConversationList!: () => void;

  private fields = [
    {
      key: 'referenceId',
      label: 'Reference ID',
      thClass: 'header__width-120px',
    },
    {
      key: 'startDate',
      label: 'Start',
      thClass: 'header__width-120px',
      formatter: (value: string) => displayDate(value, DD_MM_YYYY_HH_MM),
    },
    {
      key: 'endDate',
      label: 'End',
      thClass: 'header__width-120px',
      formatter: (value: string) => displayDate(value, DD_MM_YYYY_HH_MM),
    },
    {
      key: 'duration',
      formatter: (value: string, key: string, item: IConversationDetails) =>
        getDuration(moment(item.startDate), moment(item.endDate)),
    },
    {
      key: 'categories',
    },
    {
      key: 'deliveryChannels',
      label: 'Delivery Channels',
    },
    {
      key: 'inputTypes',
      label: 'Input Types',
    },
    {
      key: 'sastisfaction',
    },
    {
      key: 'feedback',
    },
    {
      key: 'action',
      label: 'Action',
      thClass: 'header__width-80px',
    },
  ];

  private changePage(value: number) {
    this.updateCurrentPage(value);
  }

  private selectPageSize(value: number) {
    this.updatePageSize(value);
  }

  private openHistoryModal(id: string) {
  }

  private created() {
    this.getContentConversationList();
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  margin-top: 40px;
}
</style>
