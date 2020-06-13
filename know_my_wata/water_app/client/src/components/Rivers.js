import React from 'react';
import { GeoJSON } from 'react-leaflet';
import Spinner from './Spinner';
import rivers_geojson from '../geojson/rivers_geocoded_nominatum.json';
import { riverStyle } from '../utils/MapStyles';

const Rivers = () => {
  const geoJSONStyle = () => {
    return {
      color: riverStyle.color,
      weight: riverStyle.weight,
      opacity: riverStyle.opacity
    };
  };

  const onEachFeature = (feature, layer) => {
    const popupContent = ` <Popup>${feature.properties.location} <br> ${feature.properties.display}</Popup>`;
    layer.bindPopup(popupContent);
  };

  if (rivers_geojson) {
    return <GeoJSON onEachFeature={onEachFeature} data={rivers_geojson['data']} style={geoJSONStyle} />;
  }
  return <Spinner />;
};

export default Rivers;
