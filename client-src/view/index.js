import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Particles from './components/particles';
import AboutView from './components/about-view';
import WorkView from './components/work-view';
import baseTheme from './theme.css';





View.propTypes = {
  // provideTheme
  theme: PropTypes.object.isRequired
};
function View(props) {
  const { theme } = props;
  return (
    <div className={theme.view}>
      <Particles />
      <AboutView />
      <WorkView />
    </div>
  );
}





const provideTheme = themr('View', baseTheme);





const ViewContainer = (
  Ramda.compose(
    provideTheme
  )(View)
);
ViewContainer.displayName = 'ViewContainer';
ViewContainer.propTypes = {
  ...ViewContainer.propTypes
};
ViewContainer.defaultProps = {
  ...ViewContainer.defaultProps
};





export { View, ViewContainer };
export default ViewContainer;
