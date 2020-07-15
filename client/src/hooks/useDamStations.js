import { useSelector } from 'react-redux';

const useDamStations = () => {
  const stations = useSelector(state => state.dam_stations);
  return stations;
};

export default useDamStations;
