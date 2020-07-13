import { useSelector } from 'react-redux';

const useLayerVisibility = layer => {
  const state = useSelector(state => state.visibility);
  //console.log('visibility:');
  //console.log(state);
  let visibility = state.find(item => item.filter === layer).visible;

  return visibility;
};

export default useLayerVisibility;
