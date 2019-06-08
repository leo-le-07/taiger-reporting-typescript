<template>
  <div class="vue-container">
    <b-button-group class="custom-button-group">
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypeFilters.DAY }"
        @click="updateTimeType(timeTypeFilters.DAY)"
      >
        Day
      </b-button>
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypeFilters.WEEK }"
        @click="updateTimeType(timeTypeFilters.WEEK)"
      >
        Week
      </b-button>
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypeFilters.MONTH }"
        @click="updateTimeType(timeTypeFilters.MONTH)"
      >
        Month
      </b-button>
    </b-button-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

import { TimeType } from '@/store/modules/chatbot-users/types';
import { timeTypeFilters } from '@/constants';
import * as chartbotUsers from '@/store/modules/chatbot-users';

const ChatbotUsers = namespace(chartbotUsers.name);

@Component
export default class ChatbotTimeFilters extends Vue {
  private timeTypeFilters = timeTypeFilters;

  @ChatbotUsers.State private timeType!: TimeType;
  @ChatbotUsers.Action private updateTimeType!: Promise<void>;
}
</script>

<style lang="scss" scoped>
.custom-button-group {
  .custom-btn {
    font-size: $fontSizeSmall12;
    border: 1px solid $gray200;
    background-color: $white;
    color: $black500;

    &:focus {
      outline: 0;
      box-shadow: none;
    }

    &.active {
      background-color: $gray100;
      border: 1px solid $gray200;
      color: $black500;

      &:focus {
        outline: 0;
        box-shadow: none;
      }
    }
  }
}
</style>
