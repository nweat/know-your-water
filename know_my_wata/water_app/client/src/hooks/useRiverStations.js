import { useSelector } from 'react-redux';

const useRiverStations = () => {
  const stations = useSelector(state => state.river_stations);
  console.log('river stations');
  console.log(stations);
  return stations;
};

export default useRiverStations;
