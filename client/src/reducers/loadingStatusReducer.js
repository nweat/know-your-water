import * as actions from '../actions/types';

export const loadingStatusReducer = (state = [], action) => {
  if (action.type === actions.SET_LOADING_STATUS) {
    return action.payload;
  }
  return state;
};
