import React from 'react';
import LeafletMap from './LeafletMap';
import SideBar from './SideBar';
import Modal from './Modal';
import Spinner from './Spinner';
import useDamStations from '../hooks/useDamStations';
import useRiverStations from '../hooks/useRiverStations';
import useLoadingStatus from '../hooks/useLoadingStatus';
import { riverInfoModal, damInfoModal } from '../data/defaults';

const App = () => {
  const dam = useDamStations();
  const river = useRiverStations();
  const isPending = useLoadingStatus();

  return (
    <div>
      <SideBar dam={dam} river={river} />
      <LeafletMap dam={dam} river={river} />
      <Modal modal={riverInfoModal} header={river.type} message={river.description} />
      <Modal modal={damInfoModal} header={dam.type} message={dam.description} />
      <Spinner isPending={isPending} />
    </div>
  );
};

export default App;
