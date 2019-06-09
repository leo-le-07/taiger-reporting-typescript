<template>
  <div class="vue-container">
    <Modal title="Conversation History" id="conversation-history-modal" :isScrollable="false">
      <template slot="content">
        <div class="chat-history-container">
          <div class="user-system-header">
            <div class="system-header">System</div>
            <div class="user-header">User</div>
          </div>
          <div class="content-container">
            <Message
              v-for="(conversation, index) in conversations"
              :key="index"
              :isSystem="conversation.isSystem"
              :items="conversation.contents"
            />
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import Modal from '@/components/common/Modal.vue';
import Message from './Message.vue';

import * as contentConversations from '@/store/modules/content-conversations';
import { IConversationHistory } from '@/store/modules/content-conversations/types';

const ContentConversations = namespace(contentConversations.name);

@Component({
  components: {
    Modal,
    Message,
  },
})
export default class HistoryModal extends Vue {
  @ContentConversations.State((state) =>
    state.converstationDetails.contentList) private conversations!: IConversationHistory[];
}
</script>

<style lang="scss" scoped>
.chat-history-container {
  .user-system-header {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    color: $gray500;
    font-size: $fontSizeSmall12;
    margin-bottom: 10px;
  }

  .content-container {
    height: 350px;
    overflow-y: auto;
  }

  .user-header {
    margin-right: 25px;
  }
}
</style>
