import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import bsTheme from 'theme';
import cn from 'classnames';
import omit from 'lodash.omit';

import { makeContainer, makeContainerMaxWidths } from '../../styled/mixins/grid';

const defaultProps = {
  theme: bsTheme,
};

class Container extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <div className={cn(className, 'container')} {...attributes} />
    );
  }
}

// eslint-disable-next-line no-class-assign
Container = styled(Container)`
  ${(props) => `
    ${makeContainer(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
    
    ${makeContainerMaxWidths(
      props.theme['$enable-grid-classes'],
      props.theme['$container-max-widths'],
      props.theme['$grid-breakpoints']
    )}
  `}
`;

Container.defaultProps = defaultProps;

export default Container;

