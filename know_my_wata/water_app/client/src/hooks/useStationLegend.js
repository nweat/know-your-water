import { useSelector } from 'react-redux';

const useStationLegend = () => {
  const legend = useSelector(state => ({ dam: state.dam_stations.legend, river: state.river_stations.legend }));
  //console.log('legends');
  //console.log(legend);
  return legend;
};

export default useStationLegend;
