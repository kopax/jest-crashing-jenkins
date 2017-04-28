/**
 * Menu component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import Close from '../Close';

const defaultProps = {
  theme: bsTheme,
};

class OffsetNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    dismiss: PropTypes.func,
    menuClose: PropTypes.bool,
    elementWidth: PropTypes.string,
    theme: PropTypes.object,
    'menu-right': PropTypes.bool,
    'animation-push': PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      active,
      dismiss,
      menuClose,
      'menu-right': menuRight,
      ...attributes
    } = omit(this.props, ['theme', 'elementWidth', 'animation-push']);

    const menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';
    return (
      <div
        className={cn(className, menuDirectionClassNames, { active })}
        {...attributes}
      >
        {menuClose && <Close aria-label="Close" onDismiss={dismiss} />}
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
OffsetNav = styled(OffsetNav)`
  ${(props) => `
    width: ${props.elementWidth ? props.elementWidth : props.theme['$menu-push-width']};
    height: 100%;
    background-color: white;
    z-index: ${props.theme['$zindex-menu-push']};
  `}
`;

OffsetNav.defaultProps = defaultProps;

export default OffsetNav;

