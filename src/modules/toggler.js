import { getDateString } from '../helpers/index';

export const DAY = 'DAY';
export const MONTH = 'MONTH';
export const YEAR = 'YEAR';
export const RESET = 'RESET';

export default (state = initialState, action) => {
  switch (action.type) {
    case DAY:
      console.log(`reducer DAY`);
      if (state.day === null) {
        return {
          ...state,
          day: getDateString(state.date, 'DAY')
        };
      } else return {
        ...state,
        day: null
      };
    case MONTH:
      console.log(`reducer MONTH`);
      if (state.month === null) {
        return {
          ...state,
          month: getDateString(state.date, 'MONTH')
        };
      } else return {
        ...state,
        month: null
      };
    case YEAR:
      console.log(`reducer YEAR`);
      if (state.year === null) {
        return {
          ...state,
          year: getDateString(state.date, 'YEAR')
        };
      } else return {
        ...state,
        year: null
      };
    case RESET:
      console.log(`reducer RESET`);
      return {
        ...state,
        day: null,
        month: null,
        year: null
      };

    default:
      return state;
  }
}

export const toogleCalendarField = (fieldName) => {
  console.log(`toggleCalendar(${fieldName})`);

  return dispatch => {
    switch (fieldName) {
      case DAY:
        return dispatch({
          type: DAY
        });
      case MONTH:
        return dispatch({
          type: MONTH
        });
      case YEAR:
        return dispatch({
          type: YEAR
        });
      default:
        return dispatch({
          type: RESET
        });
    }
  };
};

const initialState = {
  date: new Date(),
  day: null,
  month: null,
  year: null,
};
