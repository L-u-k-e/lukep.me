import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
import { Typography } from 'rmwc/Typography';
import { Button } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { Chip, ChipText, ChipSet } from 'rmwc/Chip';
import { themr } from 'react-css-themr';
// import {  } from 'redux/action-creators';
// import {  } from 'redux/selectors';
// import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
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

  // provideTheme
  theme: PropTypes.object.isRequired
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
    previewOnRight
  } = props;

  return (
    <Grid className={classNames(className, theme.portfolioItem)}>
      <GridCell
        className={theme.imageContainer}
        phone={4}
        tablet={8}
        desktop={5}
        order={previewOnRight ? 2 : 1}
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
        order={previewOnRight ? 1 : 2}

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
        <Button> read case study </Button>
      </GridCell>
    </Grid>
  );
}





const provideTheme = themr('PortfolioItem', baseTheme);





const PortfolioItemContainer = (
  Ramda.compose(
    provideTheme,
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
