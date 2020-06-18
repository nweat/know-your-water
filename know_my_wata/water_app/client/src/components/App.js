import React from 'react';
import LeafletMap from './LeafletMap';
import SideBar from './SideBar';

const App = () => {
  return (
    <div className="row">
      <div className="col s12">
        <SideBar />
        <LeafletMap />
      </div>
    </div>
  );
};

export default App;
