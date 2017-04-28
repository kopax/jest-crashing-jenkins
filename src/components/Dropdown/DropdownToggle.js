import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
import Button from '../Button';
import A from '../A';
const defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary',
};

class DropdownToggle extends React.Component {

  static propTypes = {
    caret: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    'data-toggle': PropTypes.string,
    'aria-haspopup': PropTypes.bool,
    split: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    nav: PropTypes.bool,
  };

  static contextTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  onClick = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle();
  }

  render() {
    const {
      className,
      cssModule,
      caret,
      split,
      nav,
      tag,
      disabled,
      ...attributes
    } = this.props;

    const ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';

    const classes = mapToCssModules(cn(className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      active: this.context.isOpen,
      'nav-link': nav,
      disabled,
    }), cssModule);

    const children = attributes.children || <span className="sr-only">{ariaLabel}</span>;

    let Tag;

    if (nav && !tag) {
      Tag = A;
      attributes.href = '#';
    } else if (!tag) {
      Tag = Button;
    } else {
      Tag = tag;
    }

    return (
      <Tag
        className={classes}
        onClick={this.onClick}
        aria-haspopup="true"
        aria-expanded={this.context.isOpen}
        {...attributes}
      >
        {children}
      </Tag>
    );
  }
}

DropdownToggle.defaultProps = defaultProps;

export default DropdownToggle;
