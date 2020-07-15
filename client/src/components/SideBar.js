import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';
import * as actions from '../actions/types';
import * as defaults from '../data/defaults';
import Layer from './Layer';

const SideBar = ({ dam, river }) => {
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
          <div className="user-view">
            <div className="background">
              <img src="logo.png" id="logo" alt="logo" />
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="version">Version {process.env.REACT_APP_VERSION}</div>
            <div className="row"></div>
          </div>
        </li>
        <li>
          <Layer
            layerText={defaults.riverLayerText}
            layerIcon={defaults.riverLayerLogo}
            layer={defaults.visibilityFilters.RIVER_STATIONS}
            dataType={defaults.RIVER_DATASET_NAME}
            defaultField={defaults.RIVER_RPI}
            year={defaults.RIVER_RPI_DEFAULT_YEAR}
            action={actions.GET_RIVER_STATIONS}
            legend={river.legend}
            yearList={defaults.DEFAULT_YEARS}
            fieldList={defaults.selectFilters.RIVER_STATIONS}
            selectedYear={river.year}
            selectedField={river.type}
            modalTarget={defaults.riverInfoModal}
            layerActive="active"
          />
        </li>
        <li>
          <Layer
            layerText={defaults.damLayerText}
            layerIcon={defaults.damLayerLogo}
            layer={defaults.visibilityFilters.DAM_STATIONS}
            dataType={defaults.DAM_DATASET_NAME}
            defaultField={defaults.DAM_CTSI}
            year={defaults.DAM_CTSI_DEFAULT_YEAR}
            action={actions.GET_DAM_STATIONS}
            legend={dam.legend}
            yearList={defaults.DEFAULT_YEARS}
            fieldList={defaults.selectFilters.DAM_STATIONS}
            selectedYear={dam.year}
            selectedField={dam.type}
            modalTarget={defaults.damInfoModal}
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

export default SideBar;
