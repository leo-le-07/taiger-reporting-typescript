import numeral from 'numeral';

export const formatPercentage = (value: number | string) => (
  numeral(value).format('0.0[0]%')
);

export const formatNumber = (value: number | string, formatted = '0,0') => (
  numeral(value).format(formatted)
);
