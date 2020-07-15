import { useSelector } from 'react-redux';

const useLoadingStatus = () => {
  const isPending = useSelector(state => state.loading.isPending);
  return isPending;
};

export default useLoadingStatus;
