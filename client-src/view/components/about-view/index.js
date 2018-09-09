import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import { Typography } from 'rmwc/Typography';
import { Chip, ChipText } from 'rmwc/Chip';
import { Button } from 'rmwc/Button';
import { Icon } from 'rmwc/Icon';
// import {  } from 'redux/action-creators';
// import {  } from 'redux/selectors';
import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import baseTheme from './theme.css';





AboutView.propTypes = {
  // external
  className: PropTypes.string.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired,

  // provideOnViewResume
  onViewResume: PropTypes.func.isRequired
};
AboutView.defaultProps = {};
function AboutView(props) {
  const {
    theme,
    className,
    onViewResume
  } = props;

  return (
    <div className={classNames(className, theme.aboutView)}>
      <div className={theme.aboutContent}>

        <div className={theme.header}>
          <Typography use="headline4">
            {'Hey, I\'m Luke'}
          </Typography>
        </div>

        <div className={theme.about}>
          <Typography use="body1">
            {'I\'m an engineer who specializes in building progressive web applications. I\'m currently working for a Biotech company in Boston. We\'re hoping to change the future of Cell Culture. '}
          </Typography>
        </div>

        <div className={theme.qualifications}>

          <div className={theme.workAndEducation}>

            <div className={theme.work}>
              <Typography use="overline">
                {'work experience'}
              </Typography>
              <br />

              <div className={theme.infoBlock}>
                <Typography use="body1" className={theme.title}>
                  {'Software Engineer/ Lead Web Applications Developer'}
                </Typography>
                <br />
                <Typography use="body2" className={theme.company}>
                  Thrive Bioscience
                </Typography>
                <br />
                <Typography use="body2" className={theme.timeFrame}>
                  {'2016 - present'}
                </Typography>
              </div>

              <div className={theme.infoBlock}>
                <Typography use="body1" className={theme.title}>
                  {'Programmer & Analyst'}
                </Typography>
                <br />
                <Typography use="body2" className={theme.company}>
                  AmeriCU Credit Union
                </Typography>
                <br />
                <Typography use="body2" className={theme.timeFrame}>
                  {'2015 - 2016'}
                </Typography>
              </div>
            </div>

            <div className={theme.education}>
              <Typography use="overline">
                {'Education'}
              </Typography>
              <br />

              <div className={theme.infoBlock}>
                <Typography use="body1" className={theme.title}>
                  {'Bachelor of Computer Science'}
                </Typography>
                <br />
                <Typography use="body2" className={theme.company}>
                  SUNY Polytechnic Instutute
                </Typography>
              </div>
            </div>
          </div>

          <div className={theme.techAndLinks}>

            <div className={theme.tech}>
              <Typography use="overline">
                {'favorite tech'}
              </Typography>
              <br />
              <Chip className={theme.chip}> JavaScript </Chip>
              <Chip className={theme.chip}> Amazon Web Services </Chip>
              <Chip className={theme.chip}> <ChipText> Ruby </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Python </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> React </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Redux </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Sketch </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Figma </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> HTML5 </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> CSS3 </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> SQL </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> RethinkDB </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Websockets </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Docker </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Linux </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Git </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> RabbitMQ </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Webpack 4 </ChipText> </Chip>
              <Chip className={theme.chip}> <ChipText> Chrome Dev Tools </ChipText> </Chip>
            </div>

            <div className={theme.links}>
              <Button raised className={theme.linkButton} onClick={onViewResume}>
                View My Resume
                <Icon className={theme.icon}>picture_as_pdf</Icon>
              </Button>
              <Button className={theme.linkButton}>
                View My Work
                <Icon className={theme.icon}>arrow_downward</Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





const provideTheme = themr('AboutView', baseTheme);





OnViewResumeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
OnViewResumeProvider.defaultProps = {
};
function OnViewResumeProvider(props) {
  const { children } = props;
  return children({ onViewResume });

  function onViewResume() {
    window.open('/resume.pdf', '_blank');
  }
}
const provideOnViewResume = wrapWithFunctionChildComponent(OnViewResumeProvider);





const AboutViewContainer = (
  Ramda.compose(
    provideTheme,
    provideOnViewResume
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
