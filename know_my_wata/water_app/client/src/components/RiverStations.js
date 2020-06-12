import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import { visibilityFilters } from '../actions';
import useRiverStations from '../hooks/useRiverStations';
import useLayerVisibility from '../hooks/useLayerVisibility';
import Spinner from './Spinner';
import * as icons from '../utils/Icons';
import * as colors from '../utils/Colors';

const RiverStations = () => {
  const stations = useRiverStations();
  const isVisible = useLayerVisibility(visibilityFilters.RIVER_STATIONS);

  const onEachFeature = (feature, layer) => {
    const popupContent = `<b> Station:  + ${feature.station_no} + </b><br/> + ${feature.address}`;
    layer.bindPopup(popupContent);
  };

  const getColor = ({ river_pollution_index_mean }) => {
    if (river_pollution_index_mean > 2 && river_pollution_index_mean <= 3) {
      return colors.riverLegend.lightly_polluted;
    } else if (river_pollution_index_mean >= 3.1 && river_pollution_index_mean <= 6) {
      return colors.riverLegend.moderately_polluted;
    } else if (river_pollution_index_mean > 6) {
      return colors.riverLegend.severely_polluted;
    } else {
      return colors.riverLegend.not_polluted;
    }
  };

  const generateRiverStationMarkers = () => {
    return stations.map(station => (
      <CircleMarker key={station.station_no} onEachFeature={onEachFeature} center={[station.lat, station.lon]} color={getColor(station)} radius={5}>
        <Popup>
          <b> Station: {station.station_no} </b>
          <br /> {station.address}
          <br /> <b>Stats:</b>
          <br /> Min RPI: {station.river_pollution_index_min}
          <br /> Mean RPI: {station.river_pollution_index_mean}
          <br /> Max RPI: {station.river_pollution_index_max}
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
