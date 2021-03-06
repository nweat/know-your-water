import { combineReducers } from 'redux';
import { riverStationsReducer, damStationsReducer } from './stationsReducer';
import { visibilityFilterReducer } from '../reducers/visibilityFilterReducer';
import { defaultLocationReducer } from '../reducers/defaultLocationReducer';
import { loadingStatusReducer } from '../reducers/loadingStatusReducer';
import { pollutionSourcesReducer } from '../reducers/pollutionSourcesReducer';

export default combineReducers({
  river_stations: riverStationsReducer,
  dam_stations: damStationsReducer,
  visibility: visibilityFilterReducer,
  default_location: defaultLocationReducer,
  loading: loadingStatusReducer,
  pollution_sources: pollutionSourcesReducer
});
