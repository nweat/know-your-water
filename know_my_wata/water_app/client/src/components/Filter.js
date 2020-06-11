import React from 'react';
import { useDispatch } from 'react-redux';
import { setLayerVisibility, visibilityFilters } from '../actions';
import useLayerVisibility from './useLayerVisibility';

const Filter = () => {
  const dispatch = useDispatch();
  const defaultChecked = useLayerVisibility(visibilityFilters.RIVER_STATIONS);

  function handleCheckBoxChange(e, filterFor) {
    dispatch(setLayerVisibility(e.target.checked, filterFor));
  }

  return (
    <ul className="collapsible collapsible-accordion">
      <li className="active">
        <div className="collapsible-header">
          <i className="material-icons">filter_list</i>Layers
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
            <ul class="collection">
              <li class="collection-item">
                <span class="legend-icon" style={{ backgroundColor: '#008000' }}></span> Non (Slightly) polluted
              </li>
              <li class="collection-item">
                <span class="legend-icon" style={{ backgroundColor: '#FFA500' }}></span> Lightly polluted
              </li>
              <li class="collection-item">
                <span class="legend-icon" style={{ backgroundColor: '#FF4500' }}></span> Moderately polluted
              </li>
              <li class="collection-item">
                <span class="legend-icon" style={{ backgroundColor: '#FF0000' }}></span> Severely polluted
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
