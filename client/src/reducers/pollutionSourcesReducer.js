import * as actions from '../actions/types';

export const pollutionSourcesReducer = (state = [], action) => {
  if (action.type === actions.GET_POLLUTION_SOURCES) {
    return action.payload;
  }
  return state;
};
