import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';
import useRiverStationsYearType from '../hooks/useRiverStationsYearType';
import useDamStationsYearType from '../hooks/useDamStationsYearType';
import * as actions from '../actions/types';
import * as defaults from '../data/defaults';
import { visibilityFilters } from '../actions';
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
            dataType={defaults.RIVER_DATASET_NAME}
            defaultField={defaults.RIVER_RPI}
            year={defaults.RIVER_RPI_DEFAULT_YEAR}
            action={actions.GET_RIVER_STATIONS}
            legend={defaults.riverstat_legends}
            yearList={defaults.DEFAULT_YEARS}
            fieldList={defaults.selectFilters.RIVER_STATIONS}
            stations={useRiverStationsYearType()}
            modalTarget="#modalRiver"
            layerActive="active"
          />
        </li>
        <li>
          <Layer
            layerText="Dam Stations"
            layerIcon="dam.png"
            layer={visibilityFilters.DAM_STATIONS}
            dataType={defaults.DAM_DATASET_NAME}
            defaultField={defaults.DAM_CTSI}
            year={defaults.DAM_CTSI_DEFAULT_YEAR}
            action={actions.GET_DAM_STATIONS}
            legend={defaults.damstat_legends}
            yearList={defaults.DEFAULT_YEARS}
            fieldList={defaults.selectFilters.DAM_STATIONS}
            stations={useDamStationsYearType()}
            modalTarget="#modalDam"
            layerActive="not-active"
          />
        </li>
        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <div className="row">
                <div className="col s1"></div>
                <div className="col s11">
                  <div className="collapsible-header">
                    <div className="chip">
                      <img src="info.png" alt="info.png" />
                      Know your Water
                    </div>
                    <i className="material-icons rotate right expand">expand_more</i>
                  </div>
                </div>
              </div>
              <div className="collapsible-body">
                <div className="col s12 m12">
                  COMING SOON.. <i className="tiny material-icons">build</i>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <div className="row">
                <div className="col s1"></div>
                <div className="col s11">
                  <div className="collapsible-header">
                    <div className="chip">
                      <img src="info.png" alt="info.png" />
                      What can I do to help?
                    </div>
                    <i className="material-icons rotate right expand">expand_more</i>
                  </div>
                </div>
              </div>
              <div className="collapsible-body">
                <div className="col s12 m12">
                  COMING SOON.. <i className="tiny material-icons">build</i>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(SideBar);
