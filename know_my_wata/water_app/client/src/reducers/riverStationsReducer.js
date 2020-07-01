import * as actions from '../actions/types';

export const riverStationsReducer = (state = [], action) => {
  if (action.type === actions.GET_RIVER_STATIONS) {
    return action.payload;
  }
  console.log(state);
  return state;
};
