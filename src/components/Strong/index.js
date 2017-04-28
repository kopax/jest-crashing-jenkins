/**
 * Strong component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import omit from 'lodash.omit';
import { mapToCssModules } from 'utils/tools';

const defaultProps = { theme: bsTheme };

class Strong extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    color: PropTypes.string,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const { className,
      color,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <strong
        className={mapToCssModules(cn(className, {
          [`text-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
Strong = styled(Strong)`
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
`;

Strong.defaultProps = defaultProps;

export default Strong;

