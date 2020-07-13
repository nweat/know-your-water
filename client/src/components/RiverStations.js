import React from 'react';
import { CircleMarker, Popup, Marker } from 'react-leaflet';
import { visibilityFilters } from '../actions';
import useRiverStations from '../hooks/useRiverStations';
import useLayerVisibility from '../hooks/useLayerVisibility';
import Spinner from './Spinner';
import { RIVER_RPI, RIVER_PH, circleMarker } from '../data/defaults';
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
        fillOpacity={circleMarker.fillOpacity}
        weight={circleMarker.weight}
        key={station.station_no}
        center={[station.lat, station.lon]}
        color={getColor(station)}
        radius={circleMarker.radius}
      >
        <Popup>
          <b> Station: {station.station_no} </b>
          <br /> <b> Address:</b> {station.address}
          <br /> <b> Coordinates:</b> {station.lat}, {station.lon}
          <br /> <br />
          <b>Results:</b>
          <br /> Mean {stations.type}: <b>{station.mean}</b>
          <br /> Min {stations.type}: {station.min}
          <br /> Max {stations.type}: {station.max}
        </Popup>
      </CircleMarker>
    ));
  };

  if (isVisible) {
    return stations.data ? generateRiverStationMarkers() : <Spinner />;
  }
  return '';
};

export default React.memo(RiverStations);
