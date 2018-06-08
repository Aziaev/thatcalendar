import { DAY, MONTH, YEAR } from '../modules/toggler';

export const getDateString = (date, item) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  switch (item) {
    case DAY:
      return day;
    case MONTH:
      return month;
    case YEAR:
      return year;
    default:
      return null;
  }
};
