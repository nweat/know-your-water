import { combineReducers } from 'redux';
import { riverStationsReducer } from '../reducers/riverStationsReducer';
import { visibilityFilterReducer } from '../reducers/visibilityFilterReducer';

export default combineReducers({
  river_stations: riverStationsReducer,
  visibility: visibilityFilterReducer
});
