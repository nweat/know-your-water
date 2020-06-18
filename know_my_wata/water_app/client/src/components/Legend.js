import React from 'react';
import { useSelector } from 'react-redux';

const Legend = ({ type }) => {
  const state = useSelector(state => state);
  let legend;

  if (type === 'river') {
    legend = state.river_stations.legend;
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

export default Legend;
