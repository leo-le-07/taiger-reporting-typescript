export type TimeType = 'day' | 'week' | 'month';

export interface IChatbotUsersChart {
  date: string;
  totalUsers: number;
  returningUsers: number;
  newUsers: number;
}

export interface IFormattedChatbotUsersChart {
  labels: string[];
  datasets: {
    label: string;
    fill: boolean;
    pointBackgroundColor: string;
    pointRadius: number;
    borderColor: string;
    borderWidth: number;
    data: number[];
  };
}

export interface IChatbotUsersState {
  timeType: TimeType;
  chartData: IChatbotUsersChart[];
}
