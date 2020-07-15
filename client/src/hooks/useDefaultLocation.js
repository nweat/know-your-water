import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDefaultLocation } from '../actions';

const useDefaultLocation = () => {
  const location = useSelector(state => state.default_location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDefaultLocation());
  }, []);

  return location;
};

export default useDefaultLocation;
