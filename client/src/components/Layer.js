import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';
import useLayerVisibility from '../hooks/useLayerVisibility';
import { setLayerVisibility, fetchEPAStats } from '../actions';
import Legend from './Legend';

const Layer = ({
  layerText,
  layerIcon,
  layer,
  dataType,
  defaultField,
  year,
  action,
  legend,
  yearList,
  fieldList,
  selectedYear,
  selectedField,
  modalTarget,
  layerActive
}) => {
  const dispatch = useDispatch();
  const defaultChecked = useLayerVisibility(layer);

  useEffect(() => {
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select, {});
    dispatch(fetchEPAStats(defaultField, year, action, dataType));
  }, []);

  function handleLayerVisibility(e, filterFor) {
    dispatch(setLayerVisibility(e.target.checked, filterFor));
  }

  function handleStatChange(e) {
    dispatch(fetchEPAStats(e.target.value, selectedYear, action, dataType));
  }

  function handleYearChange(e) {
    dispatch(fetchEPAStats(selectedField, e.target.value, action, dataType));
  }

  const generateFieldOptions = list => {
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
      <li className={layerActive}>
        <div className="row">
          <div className="col s1">
            <label>
              <input className="with-gap" name="group1" type="radio" checked={defaultChecked} onChange={e => handleLayerVisibility(e, layer)} />
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
              <select onChange={e => handleStatChange(e)}>{generateFieldOptions(fieldList)}</select>
            </div>
            <div className="col s1">
              <a className="modal-trigger" href={`#${modalTarget}`}>
                <i className="material-icons">help</i>
              </a>
            </div>
          </div>

          <div className="col s12">
            <Legend legend={legend} />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Layer;
