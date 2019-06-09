<template>
  <div class="vue-container">
    <div
      class="messages"
      :class="{ system: isSystem, user: !isSystem }"
    >
      <div class="message" v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  @Prop() private items!: string[];
  @Prop() private isSystem!: boolean;
}
</script>

<style lang="scss" scoped>
.messages {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
}

.message {
  border-radius: 6px;
  padding: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  font-size: $fontSizeSmall12;
  color: $gray600;
}

.system {
  align-items: flex-start;

  .message {
    margin-right: 25%;
    background-color: #eee;
  }
}

.user {
  align-items: flex-end;

  .message {
    color: white;
    margin-left: 25%;
    background-color: $primary;
    padding: 7px;
  }
}
</style>
