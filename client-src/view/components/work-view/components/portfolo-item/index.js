import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Typography } from 'rmwc/Typography';
import { Button } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { Chip, ChipText, ChipSet } from 'rmwc/Chip';
import { themr } from 'react-css-themr';
// import {  } from 'redux/action-creators';
import { getBrowser } from 'redux/selectors';
import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import baseTheme from './theme.css';





PortfolioItem.propTypes = {
  // external
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  previewOnRight: PropTypes.bool.isRequired,
  onReadCaseStudy: PropTypes.func.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired,

  // provideNarrowMode
  narrowMode: PropTypes.string.isRequired,
};
PortfolioItem.defaultProps = {};
function PortfolioItem(props) {
  const {
    theme,
    className,
    title,
    previewImage,
    caption,
    description,
    tech,
    previewOnRight,
    onReadCaseStudy,
    narrowMode,
  } = props;

  return (
    <div className={classNames(className, theme.portfolioItemContainer, { [theme.narrowMode]: narrowMode })}>
      <Grid className={theme.portfolioItem}>
        <GridCell
          className={theme.imageContainer}
          phone={4}
          tablet={8}
          desktop={5}
          order={!narrowMode && previewOnRight ? 2 : 1}
        >
          <img
            className={theme.previewImage}
            src={previewImage}
            alt="preview"
          />
        </GridCell>
        <GridCell
          className={theme.details}
          phone={4}
          tablet={8}
          desktop={7}
          order={!narrowMode && previewOnRight ? 1 : 2}
        >
          <Typography className={theme.title} use="headline4">
            {title}
          </Typography>
          <Typography use="body2" className={theme.caption}>
            {caption}
          </Typography>
          <Typography use="body1" className={theme.description}>
            {description}
          </Typography>
          <ChipSet className={theme.tech}>
            {tech.map(name => (
              <Chip key={name} className={theme.chip}>
                <ChipText>
                  {name}
                </ChipText>
              </Chip>
            ))}
          </ChipSet>
          <Button onClick={onReadCaseStudy}> read case study </Button>
        </GridCell>
      </Grid>
    </div>
  );
}





const provideTheme = themr('PortfolioItem', baseTheme);





const provideNarrowMode = connect(state => ({ narrowMode: getBrowser(state).lessThan.md }));





onReadCaseStudyProvider.propTypes = {
  children: PropTypes.any.isRequired,
  caseStudyLink: PropTypes.string.isRequired
};
onReadCaseStudyProvider.defaultProps = {};
function onReadCaseStudyProvider(props) {
  const { children, caseStudyLink } = props;
  return children({ onReadCaseStudy });

  function onReadCaseStudy() {
    window.open(caseStudyLink, '_blank');
  }
}
const provideOnReadCaseStudy = wrapWithFunctionChildComponent(onReadCaseStudyProvider);





const PortfolioItemContainer = (
  Ramda.compose(
    provideTheme,
    provideOnReadCaseStudy,
    provideNarrowMode
  )(PortfolioItem)
);
PortfolioItemContainer.displayName = 'PortfolioItemContainer';
PortfolioItemContainer.propTypes = {
  ...PortfolioItemContainer.propTypes,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  caseStudyLink: PropTypes.string.isRequired,
  previewOnRight: PropTypes.bool,
  className: PropTypes.string,
};
PortfolioItemContainer.defaultProps = {
  ...PortfolioItemContainer.defaultProps,
  previewOnRight: false,
  className: '',
};





export { PortfolioItem };
export default PortfolioItemContainer;
