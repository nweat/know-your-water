import { useSelector } from 'react-redux';

const useFieldDescription = () => {
  const desc = useSelector(state => ({
    river_desc: state.river_stations.description,
    dam_desc: state.dam_stations.description,
    dam_type: state.dam_stations.type,
    river_type: state.river_stations.type
  }));
  //console.log('field description');
  //console.log(desc);
  return desc;
};

export default useFieldDescription;
