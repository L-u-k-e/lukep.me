import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
// import {  } from 'redux/action-creators';
// import {  } from 'redux/selectors';
import { Typography } from 'rmwc/Typography';
import Data from '../../../../libraries/data';
// import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import baseTheme from './theme.css';





TopView.propTypes = {
  // external
  className: PropTypes.string.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired
};
TopView.defaultProps = {};
function TopView(props) {
  const {
    theme,
    className,
  } = props;

  return (
    <div className={classNames(className, theme.topView)}>
      <div className={theme.mainText}>
        <Typography use="subtitle1">{Data.name}</Typography>
        <br />
        <Typography use="headline1">
          {'Software Engineer \u2014 let\'s push the edge of the modern web.'}
        </Typography>
      </div>
    </div>
  );
}





const provideTheme = themr('TopView', baseTheme);





const TopViewContainer = (
  Ramda.compose(
    provideTheme,
  )(TopView)
);
TopViewContainer.displayName = 'TopViewContainer';
TopViewContainer.propTypes = {
  ...TopViewContainer.propTypes,
  className: PropTypes.string,
};
TopViewContainer.defaultProps = {
  ...TopViewContainer.defaultProps,
  className: '',
};





export { TopView };
export default TopViewContainer;
