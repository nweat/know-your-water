import * as actions from './types';
import axios from 'axios';

export const fetchRiverStations = () => async dispatch => {
  const response = await axios.get('/river_station_stats_rpi');
  dispatch({
    type: actions.GET_RIVER_STATIONS,
    payload: response.data
  });
};

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

export const setLayerVisibility = (visible, filter) => ({
  type: actions.SET_LAYER_VISIBILITY,
  payload: { filter, visible }
});

export const visibilityFilters = {
  RIVER_STATIONS: 'RIVER_STATIONS',
  GDWATER_STATIONS: 'GDWATER_STATIONS',
  DAM_STATIONS: 'DAM_STATIONS'
};
