import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createResponsiveStateReducer } from 'redux-responsive';
import breakpoints from 'libraries/breakpoints';
import filtersReducer from './filters';



export default combineReducers({
  browser: createResponsiveStateReducer(breakpoints, {
    extraFields: () => ({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }),
  form: formReducer,
  filters: filtersReducer
});
