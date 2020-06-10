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
          <i className="material-icons">filter_list</i>Filter
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
              <span>River</span>
            </label>
          </div>
          <div className="col s12">
            <label>
              <input type="checkbox" className="filled-in checkbox-blue" onChange={e => handleCheckBoxChange(e, visibilityFilters.DAM_STATIONS)} />
              <span>Dam</span>
            </label>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Filter;
