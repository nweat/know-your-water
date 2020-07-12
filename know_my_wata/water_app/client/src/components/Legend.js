import React from 'react';
import useStationLegend from '../hooks/useStationLegend';
import { RIVER_DATASET_NAME, DAM_DATASET_NAME } from '../data/defaults';

const Legend = ({ type }) => {
  const legend_state = useStationLegend();
  let legend;

  if (type === RIVER_DATASET_NAME) {
    legend = legend_state.river;
  } else if (type === DAM_DATASET_NAME) {
    legend = legend_state.dam;
  }

  const generateLegend = () => {
    return legend.map(legend => {
      return (
        <li className="collection-item" key={legend.name}>
          <span className="legend-icon" style={{ backgroundColor: legend.color }}></span> {legend.name}
        </li>
      );
    });
  };

  if (legend) {
    return <ul className="collection">{generateLegend()}</ul>;
  }
  return '';
};

export default React.memo(Legend);
