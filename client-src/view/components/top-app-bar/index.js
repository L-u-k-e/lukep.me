import * as Ramda from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
} from 'rmwc/TopAppBar';
import { Button } from 'rmwc/Button';
import avatar from 'public/avatar.jpg';
// import {  } from 'redux/action-creators';
// import {  } from 'redux/selectors';
// import wrapWithFunctionChildComponent from 'view/libraries/wrap-with-function-child-component';
// import wrapWithComponent from 'view/libraries/wrap-with-component';
import baseTheme from './theme.css';





CustomTopAppBar.propTypes = {
  // external
  className: PropTypes.string.isRequired,

  // provideTheme
  theme: PropTypes.object.isRequired
};
CustomTopAppBar.defaultProps = {};
function CustomTopAppBar(props) {
  const {
    theme,
    className,
  } = props;

  return (
    <TopAppBar className={classNames(theme.topAppBar, className)}>
      <TopAppBarRow className={theme.topAppBarRow}>
        <TopAppBarSection alignStart>
          <img src={avatar} alt="A small headshot of Luke." className={theme.avatar} />
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <Button className={theme.navigationButton}> Work </Button>
          <Button className={theme.navigationButton}> About </Button>
          <Button className={theme.navigationButton}> Contact </Button>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}





const provideTheme = themr('TopAppBar', baseTheme);





const TopAppBarContainer = (
  Ramda.compose(
    provideTheme,
  )(CustomTopAppBar)
);
TopAppBarContainer.displayName = 'TopAppBarContainer';
TopAppBarContainer.propTypes = {
  ...TopAppBarContainer.propTypes,
  className: PropTypes.string,
};
TopAppBarContainer.defaultProps = {
  ...TopAppBarContainer.defaultProps,
  className: '',
};





export { CustomTopAppBar };
export default TopAppBarContainer;
