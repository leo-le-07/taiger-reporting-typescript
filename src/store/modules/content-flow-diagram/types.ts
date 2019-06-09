export interface IMetrics {
  timesAsked: number;
  flowCompletionRate: number;
  fallbackCount: number;
  confusionRate: number;
  dropoffRate: number;
  positiveRating: number;
}

export interface IFormattedMetrics {
  timesAsked: string;
  flowCompletionRate: string;
  fallbackCount: string;
  confusionRate: string;
  dropoffRate: string;
  positiveRating: string;
}

export interface IContentFlowDiagramState {
  name: string;
  metrics: IMetrics;
}
