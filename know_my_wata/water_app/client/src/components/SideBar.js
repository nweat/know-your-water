import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';
import useRiverStations from '../hooks/useRiverStations';
import * as actions from '../actions/types';
import { visibilityFilters } from '../actions';
import { riverstat_legends } from '../data/defaults';
import { RIVER_RPI, RIVER_RPI_DEFAULT_YEAR, DEFAULT_YEARS, selectFilters } from '../data/defaults';
import Layer from './Layer';

const SideBar = () => {
  useEffect(() => {
    let collapsible = document.querySelectorAll('.collapsible');
    let sidenav = document.querySelectorAll('.sidenav');
    M.Collapsible.init(collapsible, {});
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <img src="logo.png" id="logo" alt="logo" />
        </li>
        <li>
          <Layer
            layerText="River Stations"
            layerIcon="river.png"
            layer={visibilityFilters.RIVER_STATIONS}
            dataType="river"
            defaultField={RIVER_RPI}
            year={RIVER_RPI_DEFAULT_YEAR}
            action={actions.GET_RIVER_STATIONS}
            legend={riverstat_legends}
            yearList={DEFAULT_YEARS}
            fieldList={selectFilters.RIVER_STATIONS}
            stations={useRiverStations()}
          />
        </li>
        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">info</i>How can I help?
              </div>
              <div className="collapsible-body"></div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
