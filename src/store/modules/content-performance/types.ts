export interface IContentPerformanceMetrics {
  totalFallbackCount: number;
  overallConfusionRate: number;
  noMessageSentByUser: number;
  totalNoAnswerRatedHelpful: number;
}

export interface IFormattedContentPerformanceMetrics {
  totalFallbackCount: string;
  overallConfusionRate: string;
  noMessageSentByUser: string;
  totalNoAnswerRatedHelpful: string;
}

export interface IContent {
  id: number;
  intent: string;
  timesAsked: number;
  fallbackCount: number;
  confusionRate: number;
  dropoffRate: number;
}

export interface IAnswerRating {
  id: number;
  question: string;
  positiveRating: number;
  negativeRating: number;
  noRating: number;
}

export interface IContentDetails {
  isLoading: boolean;
  pageSize: number;
  page: number;
  totalRows: number;
  searchContent: string;
  sortBy: string | null;
  sortDesc: boolean;
  contentList: IContent[];
}

export interface IContentPerformanceState {
  contentDetails: IContentDetails;
  metrics: IContentPerformanceMetrics;
  selectedIntentId: number | null;
  answerRatingList: IAnswerRating[];
}
