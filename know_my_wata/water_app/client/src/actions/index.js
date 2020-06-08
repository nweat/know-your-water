import * as actions from './types';
import axios from 'axios';

export const fetchRiverStations = () => async dispatch => {
  const response = await axios.get('/river_stations');
  dispatch({
    type: actions.GET_RIVER_STATIONS,
    payload: response.data
  });
};
