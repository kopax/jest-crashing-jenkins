import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themeBs, { makeTheme } from 'theme';
import UtilityProvider from './UtilityProvider';

export default class BootstrapProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    theme: themeBs,
  }

  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    utils: PropTypes.shape({
      align: PropTypes.bool,
      background: PropTypes.bool,
      a: PropTypes.bool,
      border: PropTypes.bool,
      clearfix: PropTypes.bool,
      display: PropTypes.bool,
      flex: PropTypes.bool,
      float: PropTypes.bool,
      position: PropTypes.bool,
      screenreaders: PropTypes.bool,
      sizing: PropTypes.bool,
      spacing: PropTypes.bool,
      text: PropTypes.bool,
      transition: PropTypes.bool,
      visibility: PropTypes.bool,
    }),
  }

  state = {
    isWindowPhone8Fixed: null, // just for unit testing
  }

  componentDidMount() {
    this.windowPhone8Fix();
  }

  windowPhone8Fix() {
    // Copyright 2014-2017 The Bootstrap Authors
    // Copyright 2014-2017 Twitter, Inc.
    // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      const msViewportStyle = document.createElement('style');
      msViewportStyle.appendChild(
        document.createTextNode('@-ms-viewport{width:auto!important}')
      );
      document.head.appendChild(msViewportStyle);
      this.setState({
        isWindowPhone8Fixed: true,
      });
    }
  }

  render() {
    const { children, theme, utils } = this.props;
    return (
      <ThemeProvider theme={makeTheme(theme)}>
        <UtilityProvider utils={utils}>
          {children}
        </UtilityProvider>
      </ThemeProvider>
    );
  }
}
