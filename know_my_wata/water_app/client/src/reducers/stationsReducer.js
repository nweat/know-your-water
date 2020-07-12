import * as actions from '../actions/types';

export const riverStationsReducer = (state = [], action) => {
  if (action.type === actions.GET_RIVER_STATIONS) {
    return action.payload;
  }
  return state;
};

export const damStationsReducer = (state = [], action) => {
  if (action.type === actions.GET_DAM_STATIONS) {
    return action.payload;
  }
  return state;
};
