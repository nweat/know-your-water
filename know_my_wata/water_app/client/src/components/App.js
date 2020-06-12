import React from 'react';
import LeafletMap from './LeafletMap';
import NavContainer from './NavContainer';

const App = () => {
  return (
    <div className="row">
      <div className="col s12">
        <NavContainer />
        <LeafletMap />
      </div>
    </div>
  );
};

export default App;
