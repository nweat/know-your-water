import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import { RIVER_RPI, RIVER_PH, DAM_CTSI, COD, circleMarker } from '../data/defaults';
import LineChart from './LineChart';

const Station = ({ stations }) => {
  //assign station color
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
      //use same for Dam
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
    } else if (stations.type === DAM_CTSI) {
      if (mean >= 40 && mean <= 50) {
        return stations.legend[1].color;
      } else if (mean < 40) {
        return stations.legend[0].color;
      } else if (mean > 50) {
        return stations.legend[2].color;
      }
    } else if (stations.type === COD) {
      if (mean >= 20) {
        return stations.legend[1].color;
      } else {
        return stations.legend[0].color;
      }
    }
  };

  const generateStationMarkers = () => {
    return stations.stats.map(station => (
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
          <LineChart data={stations.raw[station.station_no]} />
        </Popup>
      </CircleMarker>
    ));
  };

  if (stations.stats) {
    return generateStationMarkers();
  }

  return null;
};

export default Station;
