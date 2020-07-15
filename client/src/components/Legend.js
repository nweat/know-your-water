import React from 'react';

const Legend = ({ legend }) => {
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
  return <div></div>;
};

export default Legend;
