import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import { visibilityFilters } from '../actions';
import useRiverStations from './useRiverStations';
import useLayerVisibility from './useLayerVisibility';
import Spinner from './Spinner';

const RiverStations = () => {
  const stations = useRiverStations();
  const isVisible = useLayerVisibility(visibilityFilters.RIVER_STATIONS);

  const onEachFeature = (feature, layer) => {
    const popupContent = `<b> Station:  + ${feature.station_no} + </b><br/> + ${feature.address}`;
    layer.bindPopup(popupContent);
  };

  const generateRiverStationMarkers = () => {
    return stations.map(station => (
      <CircleMarker key={station.station_no} onEachFeature={onEachFeature} center={[station.lat, station.lon]} color="red" radius={4}>
        <Popup>
          <b> Station: {station.station_no} </b>
          <br /> {station.address}
        </Popup>
      </CircleMarker>
    ));
  };

  if (isVisible) {
    return stations ? generateRiverStationMarkers() : <Spinner />;
  }
  return '';
};

export default RiverStations;
