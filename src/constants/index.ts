export const fontSizes = {
  small14: 14,
  normal: 16,
};

export const colors = {
  black500: '#373A3C',
  gray500: '#818A91',
};

export const fontFamilyDefault = '"Roboto", sans-serif';

export const timeTypeFilters = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
};

export const DEFAULT_PAGE_SIZE = 5;

export const routeConstants = {
  overview: {
    path: '/',
    name: 'overview',
    title: 'Overview',
  },
  contentPerformance: {
    path: '/content-performance',
    name: 'content-performance',
    title: 'Content Performance',
  },
  contentFlowDiagram: {
    path: ':id/flow-diagram',
    name: 'flow-diagram',
    title: 'Flow Diagram',
  },
  contentConversations: {
    path: ':id/conversations',
    name: 'content-conversations',
    title: 'Conversations',
  },
};
