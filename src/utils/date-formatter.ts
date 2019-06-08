import moment, { Moment } from 'moment';

export const DD_MM = 'DD MMM';
export const DD_MM_YYYY_HH_MM = 'DD/MM/YYYY HH:mm A';

export const displayDate = (date: string, formatString: string): string =>
  moment(date).format(formatString);

export const getDuration = (startDate: Moment, endDate: Moment): string => {
  const duration = moment.duration(endDate.diff(startDate));
  return `${Math.floor(duration.asHours())}h ${duration.minutes()}m ${duration.seconds()}s`;
};
