import { useSelector } from 'react-redux';

const useRiverStations = () => {
  const stations = useSelector(state => state.river_stations);
  return stations;
};

export default useRiverStations;
