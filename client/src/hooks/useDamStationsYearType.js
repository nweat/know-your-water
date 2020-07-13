import { useSelector } from 'react-redux';

const useDamStationsYearType = () => {
  const stations = useSelector(state => ({ type: state.dam_stations.type, year: state.dam_stations.year }));
  //console.log('dam stations year type');
  //console.log(stations);
  return stations;
};

export default useDamStationsYearType;
