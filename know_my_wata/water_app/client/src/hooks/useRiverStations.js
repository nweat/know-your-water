import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRiverStations } from '../actions';

const useRiverStations = () => {
  const stations = useSelector(state => state.river_stations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRiverStations());
  }, []);

  return stations;
};

export default useRiverStations;
