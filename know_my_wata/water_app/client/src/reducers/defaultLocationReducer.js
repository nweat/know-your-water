import * as actions from '../actions/types';

const initState = { lat: 23.755182, lon: 120.877075 };

export const defaultLocationReducer = (state = initState, action) => {
  if (action.type === actions.SET_DEFAULT_LOCATION) {
    return action.payload;
  }
  return state;
};
