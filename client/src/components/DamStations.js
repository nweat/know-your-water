import React from 'react';
import { CircleMarker, Popup, Marker } from 'react-leaflet';
import { visibilityFilters } from '../actions';
import useDamStations from '../hooks/useDamStations';
import useLayerVisibility from '../hooks/useLayerVisibility';
import Spinner from './Spinner';
import { DAM_CTSI, circleMarker } from '../data/defaults';
import { greenIcon } from '../utils/Icons';

const DamStations = () => {
  const stations = useDamStations();
  const isVisible = useLayerVisibility(visibilityFilters.DAM_STATIONS);

  const getColor = ({ mean }) => {
    if (stations.type === DAM_CTSI) {
      if (mean >= 40 && mean <= 50) {
        return stations.legend[1].color;
      } else if (mean < 40) {
        return stations.legend[0].color;
      } else if (mean > 50) {
        return stations.legend[2].color;
      }
    }
  };

  const generateDamStationMarkers = () => {
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
          <br /> Mean {stations.type}: <b> {station.mean}</b>
          <br /> Min {stations.type}: {station.min}
          <br /> Max {stations.type}: {station.max}
        </Popup>
      </CircleMarker>
    ));
  };

  if (isVisible) {
    return stations.data ? generateDamStationMarkers() : <Spinner />;
  }
  return '';
};

export default React.memo(DamStations);
