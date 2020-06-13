import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';
import { setLayerVisibility, visibilityFilters } from '../actions';
import useLayerVisibility from '../hooks/useLayerVisibility';
import * as colors from '../utils/MapStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const defaultChecked = useLayerVisibility(visibilityFilters.RIVER_STATIONS);

  useEffect(() => {
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select, {});
  }, []);

  function handleCheckBoxChange(e, filterFor) {
    dispatch(setLayerVisibility(e.target.checked, filterFor));
  }

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
                onChange={e => handleCheckBoxChange(e, visibilityFilters.RIVER_STATIONS)}
              />
              <span>River Stations</span>
            </label>

            <select className="browser-default">
              <option value="" disabled defaultValue>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>

            <ul className="collection">
              <li className="collection-item">
                <span className="legend-icon" style={{ backgroundColor: colors.riverLegend.not_polluted }}></span> Not polluted
              </li>
              <li className="collection-item">
                <span className="legend-icon" style={{ backgroundColor: colors.riverLegend.lightly_polluted }}></span> Lightly polluted
              </li>
              <li className="collection-item">
                <span className="legend-icon" style={{ backgroundColor: colors.riverLegend.moderately_polluted }}></span> Moderately polluted
              </li>
              <li className="collection-item">
                <span className="legend-icon" style={{ backgroundColor: colors.riverLegend.severely_polluted }}></span> Severely polluted
              </li>
            </ul>
          </div>
          <div className="col s12">
            <label>
              <input type="checkbox" className="filled-in checkbox-blue" onChange={e => handleCheckBoxChange(e, visibilityFilters.DAM_STATIONS)} />
              <span>Dam Stations</span>
            </label>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Filter;
