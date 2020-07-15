import React from 'react';
import { GeoJSON } from 'react-leaflet';
import rivers_geojson from '../geojson/rivers_geocoded_nominatum.json';
import { river } from '../data/defaults';

const Rivers = () => {
  const geoJSONStyle = () => {
    const { color, weight, opacity } = river;
    return {
      color,
      weight,
      opacity
    };
  };

  const onEachFeature = (feature, layer) => {
    const popupContent = ` <Popup>${feature.properties.location} <br> ${feature.properties.display}</Popup>`;
    layer.bindPopup(popupContent);
  };

  return <GeoJSON onEachFeature={onEachFeature} data={rivers_geojson['data']} style={geoJSONStyle} />;
};

export default Rivers;
