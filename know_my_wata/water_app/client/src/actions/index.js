import * as actions from './types';
import axios from 'axios';
import { riverstat_legends } from '../data/defaults';

export const fetchRiverStats = field => async dispatch => {
  const response = await axios.get('/river_station_stats?field=' + field);
  const legend = riverstat_legends.find(item => item.type === field).legend;
  dispatch({
    type: actions.GET_RIVER_STATIONS,
    payload: { data: response.data, type: field, legend }
  });
};

export const visibilityFilters = {
  RIVER_STATIONS: 'RIVER_STATIONS',
  GDWATER_STATIONS: 'GDWATER_STATIONS',
  DAM_STATIONS: 'DAM_STATIONS'
};

export const setLayerVisibility = (visible, filter) => ({
  type: actions.SET_LAYER_VISIBILITY,
  payload: { filter, visible }
});

export const setDefaultLocation = () => async dispatch => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  window.navigator.geolocation.getCurrentPosition(
    pos => {
      dispatch({
        type: actions.SET_DEFAULT_LOCATION,
        payload: { lat: pos.coords.latitude, lon: pos.coords.longitude }
      });
    },
    err => {},
    options
  );
};
