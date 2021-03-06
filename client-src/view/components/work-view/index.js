import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import { Typography } from 'rmwc/Typography';
// import {  } from 'redux/action-creators';
import { getBrowser } from 'redux/selectors';
// import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import CAControlPreviewImage from './images/ca-control/preview.jpg';
import CDSPreviewImage from './images/cds/preview.jpg';
import CLTPreviewImage from './images/clt/preview.jpg';
import PortfolioItem from './components/portfolo-item';
import baseTheme from './theme.css';





WorkView.propTypes = {
  // external
  className: PropTypes.string.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired,

  // provideNarrowMode
  narrowMode: PropTypes.string.isRequired,
};
WorkView.defaultProps = {};
function WorkView(props) {
  const {
    theme,
    className,
    narrowMode
  } = props;

  return (
    <div className={classNames(className, theme.workView)}>
      {narrowMode &&
        <div className={theme.heading}>
          <Typography className={theme.typography} use="overline"> Selected Work </Typography>
        </div>
      }
      <PortfolioItem
        className={theme.portfolioItem}
        title="CellAssist Control Application"
        previewImage={CAControlPreviewImage}
        caption="Developed in 2018. Code is closed source and is owned by Thrive Bioscience."
        caseStudyLink="https://medium.com/@hi.lucas.p/cell-assist-control-application-case-study-3029bb79982"
        description=" CellAssist is a bench top image acquisition instrument and analytics/ reporting platform. The control application (CAControl) is a PWA that runs on an android tablet and connects to the instrument via a WiFi network. The application lets users start new scans on culture plates and manage their projects. I was the sole developer responsible for design and full stack development of the application."
        tech={[
          'JavaScript',
          'React',
          'Redux',
          'Figma',
          'HTML5',
          'CSS3',
          'RethinkDB',
          'Websockets',
          'Docker',
          'Linux',
          'Git',
          'RabbitMQ',
          'Webpack 3',
          'Chrome Dev Tools',
        ]}
      />
      <PortfolioItem
        className={theme.portfolioItem}
        title="Alpaca Control & Diagnostics"
        previewImage={CDSPreviewImage}
        previewOnRight
        caption="Developed in 2017. Code is closed source and is owned by Thrive Bioscience."
        caseStudyLink="https://medium.com/@hi.lucas.p/case-study-alpaca-control-diagnostics-a3e163496301"
        description="Alpaca is an instrument that will be capable of automating many cell culture tasks, from passaging adherant cells in culture to cleaning stem cell colonies. The Control & Diagnostics software gives engineers and field technicians low level control of the various parts of the system (motors, cameras, pipetting system, etc). I worked on the design and development of the application with one other developer at Thrive Bioscience."
        tech={[
          'JavaScript',
          'Electron',
          'React',
          'Redux',
          'HTML5',
          'CSS3',
          'RethinkDB',
          'Websockets',
          'Linux',
          'Git',
          'RabbitMQ',
          'Webpack 2',
          'Chrome Dev Tools',
        ]}
      />
      <PortfolioItem
        className={theme.portfolioItem}
        title="Operations Dashboards"
        previewImage={CLTPreviewImage}
        caption="Developed in 2016. Code is closed source and is owned by AmeriCU Credit Union."
        caseStudyLink="https://medium.com/@hi.lucas.p/case-study-operations-dashboards-13915031cb07"
        description="At AmeriCU, the C-level executives and the Board of Directors were using an outdated and insecure process to organize meetings and store important documents. I streamlined and secured the workflow for accessing important information and performing adminstrative tasks by redesigning and completely rebuilding a series of dashboards."
        tech={[
          'JavaScript',
          'Polymer',
          'Web Components',
          'HTML5',
          'CSS3',
          'SQL',
          'Git',
          'Chrome Dev Tools',
        ]}
      />
    </div>
  );
}





const provideTheme = themr('WorkView', baseTheme);




const provideNarrowMode = connect(state => ({ narrowMode: getBrowser(state).lessThan.md }));





const WorkViewContainer = (
  Ramda.compose(
    provideTheme,
    provideNarrowMode
  )(WorkView)
);
WorkViewContainer.displayName = 'WorkViewContainer';
WorkViewContainer.propTypes = {
  ...WorkViewContainer.propTypes,
  className: PropTypes.string,
};
WorkViewContainer.defaultProps = {
  ...WorkViewContainer.defaultProps,
  className: '',
};





export { WorkView };
export default WorkViewContainer;
