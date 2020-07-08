import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';
import useLayerVisibility from '../hooks/useLayerVisibility';
import { setLayerVisibility, fetchEPAStats } from '../actions';
import Legend from './Legend';

const Layers = ({ layerText, layerIcon, layer, dataType, defaultField, year, action, legend, yearList, fieldList, stations }) => {
  const dispatch = useDispatch();
  const defaultChecked = useLayerVisibility(layer);

  useEffect(() => {
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select, {});
    dispatch(fetchEPAStats(defaultField, year, action, legend, dataType));
  }, []);

  function handleLayerVisibility(e, filterFor) {
    dispatch(setLayerVisibility(e.target.checked, filterFor));
  }

  function handleStatChange(e) {
    dispatch(fetchEPAStats(e.target.value, stations.year, action, legend, dataType));
  }

  function handleYearChange(e) {
    dispatch(fetchEPAStats(stations.type, e.target.value, action, legend, dataType));
  }

  const generateSelectOptions = list => {
    return list.map(field => (
      <option value={field} key={field}>
        {field.toUpperCase()}
      </option>
    ));
  };

  const generateYearList = () => {
    return yearList.map(year => (
      <option value={year} key={year}>
        {year}
      </option>
    ));
  };

  return (
    <ul className="collapsible collapsible-accordion">
      <li className="active">
        <div className="row">
          <div className="col s1">
            <label>
              <input type="checkbox" checked={defaultChecked} className="filled-in checkbox-blue" onChange={e => handleLayerVisibility(e, layer)} />
              <span></span>
            </label>
          </div>
          <div className="col s11">
            <div className="collapsible-header">
              <div className="chip">
                <img src={layerIcon} alt={layerText} /> {layerText}
              </div>
              <i className="material-icons rotate right expand">expand_more</i>
            </div>
          </div>
        </div>

        <div className="collapsible-body">
          <div className="col s12">
            <div className="col s4">
              <select onChange={e => handleYearChange(e)}>{generateYearList()}</select>
            </div>
            <div className="col s1"></div>
            <div className="col s4">
              <select onChange={e => handleStatChange(e)}>{generateSelectOptions(fieldList)}</select>
            </div>
            <div className="col s1">
              <a className="modal-trigger" href="#modal1">
                <i className="material-icons">info</i>
              </a>
            </div>
          </div>

          <div className="col s12">
            <Legend type={dataType} />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Layers;
