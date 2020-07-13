import * as actions from './types';
import { defaultYear } from '../data/defaults';
import axios from 'axios';

export const fetchEPAStats = (field, year, action_type, data_legend, data_type) => async dispatch => {
  let url = '';
  if (year === defaultYear) {
    url = '/epa_data_stats?field=' + field + '&dtype=' + data_type;
  } else {
    url = '/epa_data_stats?field=' + field + '&year=' + year + '&dtype=' + data_type;
  }
  const response = await axios.get(url);
  const legend = data_legend.find(item => item.type === field).legend;
  const description = data_legend.find(item => item.type === field).description;
  dispatch({
    type: action_type,
    payload: { data: response.data, type: field, year, legend, description }
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
