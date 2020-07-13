import { useSelector } from 'react-redux';

const useDamStations = () => {
  const stations = useSelector(state => state.dam_stations);
  //console.log('dam stations');
  //console.log(stations);
  return stations;
};

export default useDamStations;
