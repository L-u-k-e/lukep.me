import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import { Typography } from 'rmwc/Typography';
import { Chip, ChipText, ChipSet } from 'rmwc/Chip';
import { Button } from 'rmwc/Button';
import { IconButton } from 'rmwc/IconButton';
import { Icon } from 'rmwc/Icon';
import { Grid, GridCell, GridInner } from 'rmwc/Grid';
// import {  } from 'redux/action-creators';
import { getBrowser } from 'redux/selectors';
import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import GithubIcon from './components/github-icon';
import baseTheme from './theme.css';
import InstagramIcon from './components/instagram-icon';
import LinkedInIcon from './components/linked-in-icon';
import StackExchangeIcon from './components/stack-exchange-icon';





AboutView.propTypes = {
  // external
  className: PropTypes.string.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired,

  // provideOnViewResume
  onViewResume: PropTypes.func.isRequired,

  // provideSocialMediaNagigationCallbacks
  onInstagramNav: PropTypes.func.isRequired,
  onGithubNav: PropTypes.func.isRequired,
  onStackExchangeNav: PropTypes.func.isRequired,
  onLinkedInNav: PropTypes.func.isRequired,

  // provideNarrowMode
  narrowMode: PropTypes.bool.isRequired,
};
AboutView.defaultProps = {};
function AboutView(props) {
  const {
    theme,
    className,
    onViewResume,
    onInstagramNav,
    onLinkedInNav,
    onGithubNav,
    onStackExchangeNav,
    narrowMode,
  } = props;

  return (
    <div className={classNames(className, theme.aboutView, { [theme.narrowMode]: narrowMode })}>
      <Grid className={theme.aboutContent}>
        <GridCell
          className={theme.header}
          mobile={4}
          tablet={8}
          desktop={12}
        >
          <Typography use="headline3">
            Lucas Parzych
          </Typography>
        </GridCell>

        <GridCell
          className={theme.about}
          mobile={4}
          tablet={8}
          desktop={12}
        >
          <GridInner>
            <GridCell
              mobile={4}
              tablet={8}
              desktop={8}
            >
              <Typography use="body1">
                {'I\'m an engineer who specializes in building progressive web applications. I\'m currently working for a Biotech company in Boston. We\'re hoping to change the future of Cell Culture.'}
              </Typography>
            </GridCell>
          </GridInner>
        </GridCell>
        <GridCell
          className={theme.workAndEducation}
          mobile={4}
          tablet={4}
          desktop={4}
        >
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
        </GridCell>

        <GridCell
          className={theme.techAndLinks}
          mobile={4}
          tablet={8}
          desktop={8}
        >
          <div className={theme.tech}>
            <Typography use="overline">
              {'favorite tech'}
            </Typography>
            <br />
            <ChipSet className={theme.chips}>
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
            </ChipSet>
          </div>

          <div className={theme.socialLinks}>
            <IconButton className={theme.socialIconButton} onClick={onInstagramNav}>
              <InstagramIcon />
            </IconButton>
            <IconButton className={theme.socialIconButton} onClick={onLinkedInNav}>
              <LinkedInIcon />
            </IconButton>
            <IconButton className={theme.socialIconButton} onClick={onGithubNav}>
              <GithubIcon />
            </IconButton>
            <IconButton className={theme.socialIconButton} onClick={onStackExchangeNav}>
              <StackExchangeIcon />
            </IconButton>
          </div>

          <div className={theme.resumeAndWork}>
            <Button raised className={theme.linkButton} onClick={onViewResume}>
              Read My Resume
              <Icon className={theme.icon}>picture_as_pdf</Icon>
            </Button>
            {!narrowMode && (
              <Button className={theme.linkButton} onClick={() => window.scrollTo(0, window.innerHeight)}>
                View My Work
                <Icon className={theme.icon}>arrow_downward</Icon>
              </Button>
            )}
          </div>
        </GridCell>
      </Grid>
    </div>
  );
}





const provideTheme = themr('AboutView', baseTheme);





const provideNarrowMode = connect(state => ({ narrowMode: getBrowser(state).lessThan.smTablet }));





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





SocialMediaNavigationCallbacksProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
SocialMediaNavigationCallbacksProvider.defaultProps = {
};
function SocialMediaNavigationCallbacksProvider(props) {
  const { children } = props;
  return children({
    onInstagramNav: Ramda.partial(navigate, ['https://www.instagram.com/lifesize.luke/']),
    onLinkedInNav: Ramda.partial(navigate, ['https://www.linkedin.com/in/lucas-parzych']),
    onGithubNav: Ramda.partial(navigate, ['https://github.com/L-u-k-e']),
    onStackExchangeNav: Ramda.partial(navigate, ['https://stackoverflow.com/story/lukep']),
  });

  function navigate(link, event) {
    window.open(link, '_blank');
    // This is necessary. Otherwise 2 tabs open on desktop.
    // IDK why exacty, I'd have to look into the RMWC IconButton impl to find out more.
    event.stopPropagation();
  }
}
const provideSocialMediaNavigationCallbacks = wrapWithFunctionChildComponent(SocialMediaNavigationCallbacksProvider);





const AboutViewContainer = (
  Ramda.compose(
    provideTheme,
    provideOnViewResume,
    provideSocialMediaNavigationCallbacks,
    provideNarrowMode
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
