
export interface IConversationDetails {
  referenceId: string;
  startDate: string;
  endDate: string;
  categories: string;
  deliveryChannels: string;
  feedback: string;
  inputTypes: string;
  sastisfaction: string;
}

export interface IConversationHistory {
  isSystem: boolean;
  contents: string[];
}

export interface IConversationTableManagement {
  isLoading: boolean;
  pageSize: number;
  page: number;
  totalRows: number;
  contentList: IConversationDetails[];
}

export interface IContentConversationsState {
  name: string;
  conversationTableManagement: IConversationTableManagement;
  converstationDetails: {
    contentList: IConversationHistory[],
  };
}
