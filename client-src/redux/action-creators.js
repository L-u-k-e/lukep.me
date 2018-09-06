import * as actionTypes from 'redux/action-types';


export function updateSelectedFilterID(filterID) { // eslint-disable-line import/prefer-default-export
  return {
    type: actionTypes.UPDATE_SELECTED_FILTER_ID,
    payload: { filterID }
  };
}
