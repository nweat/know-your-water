import { useSelector } from 'react-redux';

const useRiverStationsYearType = () => {
  const stations = useSelector(state => ({ type: state.river_stations.type, year: state.river_stations.year }));
  //console.log('river stations year type');
  //console.log(stations);
  return stations;
};

export default useRiverStationsYearType;
