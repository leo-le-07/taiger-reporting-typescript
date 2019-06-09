<template>
  <div class="vue-container">
    <Modal title="Answer Rating" id="answer-rating-modal">
      <template slot="content">
        <b-table
          striped
          hover
          bordered
          borderless
          table-class="app-table"
          thead-class="app-thead"
          tbody-tr-class="app-tbody-tr"
          :fields="fields"
          :items="answerRatings"
        />
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import Modal from '@/components/common/Modal.vue';

import * as contentPerformance from '@/store/modules/content-performance';
import { formatNumber } from '@/utils/number-formatter';
import { IAnswerRating } from '@/store/modules/content-performance/types';

const ContentPerformance = namespace(contentPerformance.name);

@Component({
  components: {
    Modal,
  },
})
export default class AnswerRatingModal extends Vue {
  private fields = [
    {
      key: 'id',
      label: 'ID',
    },
    'question',
    {
      key: 'positiveRating',
      label: 'Positive Ratings',
      class: 'text-center',
      sortable: true,
      formatter: (value: number) => formatNumber(value),
    },
    {
      key: 'negativeRating',
      label: 'Negative Ratings',
      class: 'text-center',
      sortable: true,
      formatter: (value: number) => formatNumber(value),
    },
    {
      key: 'noRating',
      label: 'No Ratings',
      class: 'text-center',
      sortable: true,
      formatter: (value: number) => formatNumber(value),
    },
  ];

  @ContentPerformance.State('answerRatingList') private answerRatings!: IAnswerRating[];
}
</script>