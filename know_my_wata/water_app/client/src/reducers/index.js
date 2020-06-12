import { combineReducers } from 'redux';
import { riverStationsReducer } from '../reducers/riverStationsReducer';
import { visibilityFilterReducer } from '../reducers/visibilityFilterReducer';
import { defaultLocationReducer } from '../reducers/defaultLocationReducer';

export default combineReducers({
  river_stations: riverStationsReducer,
  visibility: visibilityFilterReducer,
  default_location: defaultLocationReducer
});
