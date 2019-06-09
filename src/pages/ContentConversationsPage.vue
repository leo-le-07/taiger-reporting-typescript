<template>
  <div class="home">
    <div class="app-header-page-container">
      <h1>Conversations</h1>
    </div>
    <div class="header-container">
      <Header />
    </div>
    <div class="conversation-table-container">
      <ConversationTable />
    </div>
    <HistoryModal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import Header from '@/components/ContentConversations/Header.vue';
import ConversationTable from '@/components/ContentConversations/ConversationTable.vue';
import HistoryModal from '@/components/ContentConversations/HistoryModal.vue';

import { routeConstants } from '@/constants';
import { IBreadcrumbItem } from '@/store/modules/breadcrumb/types';
import * as breadcrumb from '@/store/modules/breadcrumb';
import * as contentPerformance from '@/store/modules/content-performance';
import * as contentConversations from '@/store/modules/content-conversations';

const Breadcrumb = namespace(breadcrumb.name);
const ContentPerformance = namespace(contentPerformance.name);
const ContentConversations = namespace(contentConversations.name);

@Component({
  components: {
    Header,
    ConversationTable,
    HistoryModal,
  },
})
export default class ContentConversationsPage extends Vue {
  @Breadcrumb.Mutation('setItems') private setBreadcrumbItems!: (items: IBreadcrumbItem[]) => void;
  @Breadcrumb.Mutation('clearItems') private clearBreadcrumbItems!: () => void;

  @ContentPerformance.Mutation private setIntentId!: (id: number) => void;
  @ContentPerformance.Mutation private clearIntentId!: () => void;

  @ContentConversations.Action private getContentConversations!: () => void;

  private created() {
    this.setBreadcrumbItems([
      {
        text: routeConstants.contentPerformance.title,
        to: { name: routeConstants.contentPerformance.name },
      },
      {
        text: routeConstants.contentFlowDiagram.title,
        to: { name: routeConstants.contentFlowDiagram.name },
      },
      {
        text: routeConstants.contentConversations.title,
        active: true,
      },
    ]);
    this.setIntentId(parseInt(this.$route.params.id, 10));
    this.getContentConversations();
  }

  // @ts-ignore
  private beforeRouteLeave(to, from, next) {
    this.clearIntentId();
    this.clearBreadcrumbItems();
    next();
  }
}
</script>

<style lang="scss" scoped>
.conversation-table-container {
  margin-top: 10px;
}
</style>
