import * as actions from '../actions/types';
import { defaultLocation } from '../data/defaults';

export const defaultLocationReducer = (state = defaultLocation, action) => {
  if (action.type === actions.SET_DEFAULT_LOCATION) {
    return action.payload;
  }
  return state;
};
