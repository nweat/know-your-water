import React, { useEffect } from 'react';
import { Popup, Marker } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { fetchPollutionSources } from '../actions';
import { pollutionSourceIcon } from '../utils/Icons';

const PollutionSources = ({ pollution_sources }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPollutionSources());
  }, []);

  const generateMarkers = () => {
    return pollution_sources.data.map(source => (
      <Marker position={[source.TWD97Lat, source.TWD97Lon]} icon={pollutionSourceIcon} key={source.RegistrationNo}>
        <Popup>
          <b> Facility: {source.FacilityName} </b>
          <br />
          <b>
            Lat: {source.TWD97Lat}, Lon: {source.TWD97Lon}
          </b>
          <br /> <b> Address:</b> {source.Address}
          <br /> <b> Industry:</b> {source.IndustryName}
        </Popup>
      </Marker>
    ));
  };

  if (pollution_sources.data) {
    return generateMarkers();
  }

  return null;
};

export default PollutionSources;
