/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { mapToCssModules } from 'utils/tools';
import { a } from '../../styled/mixins/a';

const defaultProps = {
  tag: 'a',
  theme: bsTheme,
};

class A extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    active: PropTypes.bool,
    tag: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.object,
    color: PropTypes.string,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  state = {
    focus: false,
  }

  render() {
    const {
      className,
      active,
      disabled,
      cssModule,
      color,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    const { focus } = this.state;

    return (
      <Tag
        className={mapToCssModules(cn(className, {
          focus,
          active,
          disabled,
          [`text-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
A = styled(A)`
  ${(props) => `
    ${a(
      props.theme['$link-color'],
      props.theme['$link-decoration'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
      props.theme['$enable-hover-media-query'],
    )}
  `}
`;

A.defaultProps = defaultProps;

export default A;

// export composers
export { default as composeLink } from './composeLink';
