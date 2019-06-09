<template>
  <div class="vue-container">
    <div class="intent-name-container">
      <div class="intent-name">Intent Name: {{ name }}</div>
      <div class="edit-intent">
        <ButtonOutline>Edit Intent</ButtonOutline>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import ButtonOutline from '@/components/common/ButtonOutline.vue';

import * as contentConversations from '@/store/modules/content-conversations';

const ContentConversations = namespace(contentConversations.name);

@Component({
  components: {
    ButtonOutline,
  },
})
export default class Header extends Vue {
  @ContentConversations.State private name!: string;
}
</script>

<style lang="scss" scoped>
.intent-name-container {
  display: flex;
  align-items: center;
}

.intent-name {
  color: $gray500;
  font-size: $fontSizeNormal;
  margin-right: 15px;
}
</style>
