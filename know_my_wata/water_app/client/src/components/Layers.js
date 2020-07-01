import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';
import { setLayerVisibility, visibilityFilters, fetchRiverStats } from '../actions';
import { RIVER_RPI, RIVER_RPI_DEFAULT_YEAR, DEFAULT_YEARS, selectFilters } from '../data/defaults';
import useLayerVisibility from '../hooks/useLayerVisibility';
import useRiverStations from '../hooks/useRiverStations';
import Legend from '../components/Legend';

const Layers = () => {
  const dispatch = useDispatch();
  const stations = useRiverStations();
  const defaultChecked = useLayerVisibility(visibilityFilters.RIVER_STATIONS);

  useEffect(() => {
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select, {});
    dispatch(fetchRiverStats(RIVER_RPI, RIVER_RPI_DEFAULT_YEAR));
  }, []);

  function handleLayerVisibility(e, filterFor) {
    dispatch(setLayerVisibility(e.target.checked, filterFor));
  }

  function handleRiverStatChange(e) {
    dispatch(fetchRiverStats(e.target.value, stations.year));
  }

  function handleYearChange(e) {
    dispatch(fetchRiverStats(stations.type, e.target.value));
  }

  const generateSelectOptions = list => {
    return list.map(field => (
      <option value={field} key={field}>
        {field.toUpperCase()}
      </option>
    ));
  };

  const generateYearList = () => {
    return DEFAULT_YEARS.map(year => (
      <option value={year} key={year}>
        {year}
      </option>
    ));
  };

  return (
    <ul className="collapsible collapsible-accordion">
      <li className="active">
        <div className="collapsible-header">
          <i className="material-icons">filter_list</i>Layers
          <i className="material-icons rotate right expand">expand_more</i>
        </div>
        <div className="collapsible-body">
          <div className="col s12">
            <select onChange={e => handleYearChange(e)} className="browser-default year">
              {generateYearList()}
            </select>
            <label>
              <input
                type="checkbox"
                checked={defaultChecked}
                className="filled-in checkbox-blue"
                onChange={e => handleLayerVisibility(e, visibilityFilters.RIVER_STATIONS)}
              />
              <span>River Stations</span>
            </label>

            <div className="col s9">
              <select onChange={e => handleRiverStatChange(e)} className="browser-default">
                {generateSelectOptions(selectFilters.RIVER_STATIONS)}
              </select>
            </div>

            <div className=""></div>

            <a className="modal-trigger" href="#modal1">
              <i className="material-icons">info_outline</i>
            </a>

            <div className="col s8">
              <Legend type="river" />
            </div>
          </div>

          <div className="col s12">
            <label>
              <input type="checkbox" className="filled-in checkbox-blue" onChange={e => handleLayerVisibility(e, visibilityFilters.DAM_STATIONS)} />
              <span>Dam Stations</span>
            </label>
            <select className="browser-default">{generateSelectOptions(selectFilters.DAM_STATIONS)}</select>
            <label></label>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Layers;
