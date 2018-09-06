import createReducer from 'libraries/create-reducer';
import * as actionTypes from 'redux/action-types';





const initialState = {
  active: true,
  selectedFilterID: null
};

const subReducers = {
  [actionTypes.UPDATE_SELECTED_FILTER_ID]: updateSelection,
  [actionTypes.ACTIVATE_FILTER_SELECTOR]: activate,
  [actionTypes.DEACTIVATE_FILTER_SELECTOR]: deactivate,
};

export default createReducer(initialState, subReducers);





function updateSelection(state, action) {
  const nextState = { ...state };
  const { filterID } = action.payload;
  nextState.selectedFilterID = filterID;
  nextState.active = false;
  return nextState;
}




function activate(state) {
  const nextState = { ...state, active: true };
  return nextState;
}





function deactivate(state) {
  const nextState = { ...state, active: false };
  return nextState;
}
