import * as actions from '../actions/types';
import { visibilityFilters } from '../data/defaults';

const initState = [
  { filter: visibilityFilters.RIVER_STATIONS, visible: true },
  { filter: visibilityFilters.DAM_STATIONS, visible: false },
  { filter: visibilityFilters.GDWATER_STATIONS, visible: false },
  { filter: visibilityFilters.POLLUTION_SOURCES, visible: false }
];

export const visibilityFilterReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_LAYER_VISIBILITY:
      let newState = state.map(item => {
        return { ...item };
      });

      if (action.payload.filter !== visibilityFilters.POLLUTION_SOURCES) {
        newState.find(item => item.filter === action.payload.filter).visible = action.payload.visible;
        newState.find(item => item.filter !== action.payload.filter).visible = false;
      } else {
        newState.find(item => item.filter === action.payload.filter).visible = action.payload.visible;
      }

      return newState;
    default:
      return state;
  }
};
