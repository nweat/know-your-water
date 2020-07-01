import React from 'react';
import { CircleMarker, Popup, Marker } from 'react-leaflet';
import { visibilityFilters } from '../actions';
import useRiverStations from '../hooks/useRiverStations';
import useLayerVisibility from '../hooks/useLayerVisibility';
import Spinner from './Spinner';
import { RIVER_RPI, RIVER_PH, riverStationCircleMarker } from '../data/defaults';
import { greenIcon } from '../utils/Icons';

const RiverStations = () => {
  const stations = useRiverStations();
  const isVisible = useLayerVisibility(visibilityFilters.RIVER_STATIONS);

  const getColor = ({ mean }) => {
    if (stations.type === RIVER_RPI) {
      if (mean > 2 && mean <= 3) {
        return stations.legend[1].color;
      } else if (mean >= 3.1 && mean <= 6) {
        return stations.legend[2].color;
      } else if (mean > 6) {
        return stations.legend[3].color;
      } else {
        return stations.legend[0].color;
      }
    } else if (stations.type === RIVER_PH) {
      if (mean >= 8) {
        return stations.legend[4].color;
      } else if (mean >= 7) {
        return stations.legend[3].color;
      } else if (mean >= 6) {
        return stations.legend[2].color;
      } else if (mean >= 5) {
        return stations.legend[1].color;
      } else {
        return stations.legend[0].color;
      }
    }
  };

  const generateRiverStationMarkers = () => {
    return stations.data.map(station => (
      <CircleMarker
        fillOpacity={riverStationCircleMarker.fillOpacity}
        weight={riverStationCircleMarker.weight}
        key={station.station_no}
        center={[station.lat, station.lon]}
        color={getColor(station)}
        radius={riverStationCircleMarker.radius}
      >
        <Popup>
          <b> Station: {station.station_no} </b>
          <br /> {station.address}
          <br /> <b>Stats:</b>
          <br /> Min {stations.type}: {station.min}
          <br /> Mean {stations.type}: {station.mean}
          <br /> Max {stations.type}: {station.max}
        </Popup>
      </CircleMarker>
    ));
  };

  if (isVisible) {
    return stations.data ? generateRiverStationMarkers() : <Spinner />;
  }
  return <Spinner />;
};

export default RiverStations;
