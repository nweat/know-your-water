import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as icons from '../utils/Icons';
import Rivers from './Rivers';
import RiverStations from './RiverStations';

const LeafletMap = () => {
  const [lat, setLat] = useState(23.755182);
  const [lon, setLon] = useState(120.877075);
  const [zoom, setZoom] = useState(9);
  const position = [lat, lon];

  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibndlYXQiLCJhIjoiY2syMGZ0bzBmMDBhaTNvbzNsNm9mdmJyeCJ9.DN7vZvDaDUa-JLaP5gXQjQ"
        id="mapbox/streets-v11"
      />
      <Rivers />
      <RiverStations />
    </Map>
  );
};

export default LeafletMap;
