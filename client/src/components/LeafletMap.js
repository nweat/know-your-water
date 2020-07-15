import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Rivers from './Rivers';
import Station from './Station';
import useDefaultLocation from '../hooks/useDefaultLocation';
import useLayerVisibility from '../hooks/useLayerVisibility';
import { defaultZoom, visibilityFilters, zoomControl, zoomControlPostion, attribution, mapBoxURL, mapID } from '../data/defaults';

const LeafletMap = ({ dam, river }) => {
  const { lat, lon } = useDefaultLocation();
  const isVisibleRiver = useLayerVisibility(visibilityFilters.RIVER_STATIONS);
  const isVisibleDam = useLayerVisibility(visibilityFilters.DAM_STATIONS);
  const position = [lat, lon];

  const renderStations = () => {
    if (isVisibleRiver) {
      return <Station stations={river} />;
    } else if (isVisibleDam) {
      return <Station stations={dam} />;
    }
  };

  return (
    <Map center={position} zoom={defaultZoom} zoomControl={zoomControl}>
      <TileLayer attribution={attribution} url={mapBoxURL} id={mapID} />
      <ZoomControl position={zoomControlPostion} />
      <Rivers />
      {renderStations()}
    </Map>
  );
};

export default LeafletMap;
