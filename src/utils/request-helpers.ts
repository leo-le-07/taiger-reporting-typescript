import { DEFAULT_PAGE_SIZE } from '@/constants';

interface IQueryParams {
  page?: number;
  pageSize?: number;
  searchContent?: string;
  sortBy?: string | null;
  sortDesc?: boolean;
}

export const getQueryParams = ({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  searchContent = '',
  sortBy = null,
  sortDesc = true,
}: IQueryParams) => ({
  _page: page,
  _limit: pageSize,
  q: encodeURIComponent(searchContent),
  _sort: sortBy,
  _order: sortDesc ? 'desc' : 'asc',
});
