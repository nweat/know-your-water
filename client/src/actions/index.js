import * as actions from './types';
import { defaultYear, enableHighAccuracy, timeout, maximumAge, legends } from '../data/defaults';
import axios from 'axios';

export const fetchPollutionSources = () => async dispatch => {
  let url = '/pollution_sources';

  const response = await axios.get(url);
  dispatch({
    type: actions.GET_POLLUTION_SOURCES,
    payload: {
      data: response.data
    }
  });
};

export const fetchEPAStats = (field, year, action_type, data_type) => async dispatch => {
  let url = '';
  //dispatch to set isPending to true to handle loading, is there a better way to do this?
  dispatch({
    type: actions.SET_LOADING_STATUS,
    payload: { isPending: true }
  });

  if (year === defaultYear) {
    url = '/epa_data_stats?field=' + field + '&dtype=' + data_type;
  } else {
    url = '/epa_data_stats?field=' + field + '&year=' + year + '&dtype=' + data_type;
  }
  const response = await axios.get(url);
  const legend = legends.find(item => item.type === field).legend;
  const description = legends.find(item => item.type === field).description;
  dispatch({
    type: action_type,
    payload: {
      stats: response.data.stats,
      raw: response.data.raw,
      type: field,
      year,
      legend,
      description
    }
  });

  dispatch({
    type: actions.SET_LOADING_STATUS,
    payload: { isPending: false }
  });
};

export const setLayerVisibility = (visible, filter) => ({
  type: actions.SET_LAYER_VISIBILITY,
  payload: { filter, visible }
});

export const setDefaultLocation = () => async dispatch => {
  const options = {
    enableHighAccuracy,
    timeout,
    maximumAge
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
