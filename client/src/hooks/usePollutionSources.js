import { useSelector } from 'react-redux';

const usePollutionSources = () => {
  const pollution_sources = useSelector(state => state.pollution_sources);
  return pollution_sources;
};

export default usePollutionSources;
