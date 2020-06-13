import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Rivers from './Rivers';
import RiverStations from './RiverStations';
import useDefaultLocation from '../hooks/useDefaultLocation';

const LeafletMap = () => {
  const { lat, lon } = useDefaultLocation();
  const position = [lat, lon];

  return (
    <Map center={position} zoom={12}>
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibndlYXQiLCJhIjoiY2syMGZ0bzBmMDBhaTNvbzNsNm9mdmJyeCJ9.DN7vZvDaDUa-JLaP5gXQjQ"
        id="mapbox/streets-v11"
      />
      <ZoomControl position="bottomright" />
      <Rivers />
      <RiverStations />
    </Map>
  );
};

export default LeafletMap;
