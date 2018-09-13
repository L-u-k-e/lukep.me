import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import ParticlesJS from 'react-particles-js';
// import {  } from 'redux/action-creators';
// import {  } from 'redux/selectors';
// import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import baseTheme from './theme.css';





Particles.propTypes = {
  // external
  className: PropTypes.string.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired
};
Particles.defaultProps = {};
function Particles(props) {
  const {
    theme,
    className,
  } = props;

  return (
    <ParticlesJS
      className={classNames(theme.particlesCanvasWrapper, className)}
      params={{
        particles: {
          number: {
            value: 500
          },
          size: {
            value: 4,
            random: true
          },
          color: {
            value: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
          },
          line_linked: { enable: false, distance: 50, color: '#000000', opacity: 0.5, width: 1 }
        },
      }}
    />
  );
}





const provideTheme = themr('Particles', baseTheme);





const ParticlesContainer = (
  Ramda.compose(
    provideTheme,
  )(Particles)
);
ParticlesContainer.displayName = 'ParticlesContainer';
ParticlesContainer.propTypes = {
  ...ParticlesContainer.propTypes,
  className: PropTypes.string,
};
ParticlesContainer.defaultProps = {
  ...ParticlesContainer.defaultProps,
  className: '',
};





export { Particles };
export default ParticlesContainer;
