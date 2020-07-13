import React from 'react';
import LeafletMap from './LeafletMap';
import SideBar from './SideBar';
import Modal from './Modal';
import useFieldDescription from '../hooks/useFieldDescription';

const App = () => {
  const desc = useFieldDescription();

  return (
    <div className="row">
      <div className="col s12">
        <SideBar />
        <LeafletMap />
        <Modal modal="modalRiver" header={desc.river_type} message={desc.river_desc} />
        <Modal modal="modalDam" header={desc.dam_type} message={desc.dam_desc} />
      </div>
    </div>
  );
};

export default App;
