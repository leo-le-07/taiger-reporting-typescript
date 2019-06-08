interface IBasicPerformance {
  value: number;
  isPositivePercentage: boolean;
  percentageValue: number;
}

export interface IChatbotPerformance {
  totalUsers: IBasicPerformance;
  chatbotRating: IBasicPerformance & { total: number };
  avgSessionDuration: IBasicPerformance;
  goalCompletion: IBasicPerformance;
  goalConversionRate: IBasicPerformance;
  deflectionRate: IBasicPerformance;
  totalFallbackCount: IBasicPerformance;
  overallConfusion: IBasicPerformance;
  chatbotActivation: IBasicPerformance;
}
