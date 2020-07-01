import React from 'react';
import LeafletMap from './LeafletMap';
import SideBar from './SideBar';
import Modal from './Modal';
import useRiverStations from '../hooks/useRiverStations';

const App = () => {
  const stations = useRiverStations();

  return (
    <div className="row">
      <div className="col s12">
        <SideBar />
        <LeafletMap />
        <Modal message={stations.description} />
      </div>
    </div>
  );
};

export default App;
