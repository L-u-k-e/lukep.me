import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import { Typography } from 'rmwc';
// import {  } from 'redux/action-creators';
// import {  } from 'redux/selectors';
// import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import baseTheme from './theme.css';





AboutView.propTypes = {
  // external
  className: PropTypes.string.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired
};
AboutView.defaultProps = {};
function AboutView(props) {
  const {
    theme,
    className,
  } = props;

  return (
    <div className={classNames(className, theme.aboutView)}>
      <div className={theme.aboutContent}>
        <div className={theme.header}>
          <Typography use="headline4">
            {'Hey, I\'m luke'}
          </Typography>
        </div>
        <div className={theme.about}>
          <Typography use="body1">
            {'I\'m an experienced full stack software developer with a deep appreciation for the many facets of engineering for the modern web, including: responsive design, security, performance and progressive enhancement. more stuff here react redux nodejs full stack design, experience, etc'}
          </Typography>
        </div>
        <div className={theme.work}>
          <Typography use="overline">
            {'work experience'}
          </Typography>

          <div className={theme.positionListItem}>
            <div className={theme.company}>
              Thrive Bioscience
            </div>
            <div className={theme.title}>
              {'Software Engineer/ Lead Web Applications Developer \u2014 2015 - 2016'}
            </div>
          </div>
          <div className={theme.positionListItem}>
            <div className={theme.company}>
              AmeriCU Credit Union
            </div>
            <div className={theme.title}>
              {'Programmer & Analyst - 2015 - 2016'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





const provideTheme = themr('AboutView', baseTheme);





const AboutViewContainer = (
  Ramda.compose(
    provideTheme,
  )(AboutView)
);
AboutViewContainer.displayName = 'AboutViewContainer';
AboutViewContainer.propTypes = {
  ...AboutViewContainer.propTypes,
  className: PropTypes.string,
};
AboutViewContainer.defaultProps = {
  ...AboutViewContainer.defaultProps,
  className: '',
};





export { AboutView };
export default AboutViewContainer;
