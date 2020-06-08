import { combineReducers } from 'redux';
import * as actions from '../actions/types';

const riverStationsReducer = (state = [], action) => {
  if (action.type == actions.GET_RIVER_STATIONS) {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  river_stations: riverStationsReducer
});
