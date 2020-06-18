import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';
import { setLayerVisibility, visibilityFilters, fetchRiverStats } from '../actions';
import { RIVER_RPI, selectFilters } from '../data/defaults';
import useLayerVisibility from '../hooks/useLayerVisibility';
import Legend from '../components/Legend';

const Layers = () => {
  const dispatch = useDispatch();
  const defaultChecked = useLayerVisibility(visibilityFilters.RIVER_STATIONS);

  useEffect(() => {
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select, {});
    dispatch(fetchRiverStats(RIVER_RPI));
  }, []);

  function handleLayerVisibility(e, filterFor) {
    dispatch(setLayerVisibility(e.target.checked, filterFor));
  }

  function handleRiverStatChange(e) {
    dispatch(fetchRiverStats(e.target.value));
  }

  const generateSelectOptions = list => {
    return list.map(field => (
      <option value={field} key={field}>
        {field.toUpperCase()}
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
            <label>
              <input
                type="checkbox"
                checked={defaultChecked}
                className="filled-in checkbox-blue"
                onChange={e => handleLayerVisibility(e, visibilityFilters.RIVER_STATIONS)}
              />
              <span>River Stations</span>
            </label>

            <select onChange={e => handleRiverStatChange(e)} className="browser-default">
              {generateSelectOptions(selectFilters.RIVER_STATIONS)}
            </select>
            <label></label>

            <Legend type="river" />
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
