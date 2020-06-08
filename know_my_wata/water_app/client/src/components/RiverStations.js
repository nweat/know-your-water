import React from 'react';
import useRiverStations from './useRiverStations';
import { CircleMarker, Popup } from 'react-leaflet';

const RiverStations = ({ enabled }) => {
  const stations = useRiverStations();

  const onEachFeature = (feature, layer) => {
    const popupContent = `<b> Station:  + ${feature.station_no} + </b><br/> + ${feature.address}`;
    layer.bindPopup(popupContent);
  };

  if (enabled) {
    return stations.map(station => (
      <CircleMarker key={station.station_no} onEachFeature={onEachFeature} center={[station.lat, station.lon]} color="red" radius={4}>
        <Popup>
          <b> Station: {station.station_no} </b>
          <br /> {station.address}
        </Popup>
      </CircleMarker>
    ));
  }
  return '';
};

export default RiverStations;
