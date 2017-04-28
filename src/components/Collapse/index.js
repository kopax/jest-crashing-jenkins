import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';

import { mapToCssModules } from 'utils/tools';

const SHOW = 'SHOW';
const SHOWN = 'SHOWN';
const HIDE = 'HIDE';
const HIDDEN = 'HIDDEN';


class Collapse extends Component {

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    cssModule: PropTypes.object,
    navbar: PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
    isOpen: PropTypes.bool,
    delay: PropTypes.oneOfType([
      PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
      PropTypes.number,
    ]),
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    theme: bsTheme,
    tag: 'div',
    delay: {
      show: 350,
      hide: 350,
    },
    onOpened: () => {
      // This is intentional
    },
    onClosed: () => {
      // This is intentional
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      collapse: props.isOpen ? SHOWN : HIDDEN,
      height: null,
    };
    this.element = null;
  }

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if (willOpen && collapse === HIDDEN) {
      // will open
      this.setState({ collapse: SHOW }, () => {
        // the height transition will work after class "collapsing" applied
        this.setState({ height: this.getHeight() });
        this.transitionTag = setTimeout(() => {
          this.setState({
            collapse: SHOWN,
            height: null,
          });
        }, this.getDelay('show'));
      });
    } else if (!willOpen && collapse === SHOWN) {
      // will hide
      this.setState({ height: this.getHeight() }, () => {
        this.setState({
          collapse: HIDE,
          height: this.getHeight(),
        }, () => {
          this.setState({ height: 0 });
        });
      });

      this.transitionTag = setTimeout(() => {
        this.setState({
          collapse: HIDDEN,
          height: null,
        });
      }, this.getDelay('hide'));
    }
    // else: do nothing.
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.collapse === SHOWN &&
      prevState &&
      prevState.collapse !== SHOWN) {
      this.props.onOpened();
    }

    if (this.state.collapse === HIDDEN &&
      prevState &&
      prevState.collapse !== HIDDEN) {
      this.props.onClosed();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTag);
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return delay[key];
    }
    return delay;
  }

  getHeight() {
    return this.element.scrollHeight;
  }

  render() {
    const {
      navbar,
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['isOpen', 'theme', 'delay', 'onOpened', 'onClosed']);

    const { collapse, height } = this.state;

    let collapseClass;
    if (collapse === SHOW || collapse === HIDE) {
      collapseClass = 'collapsing';
    } else if (collapse === SHOWN) {
      collapseClass = 'collapse show';
    } else if (collapse === HIDDEN) {
      collapseClass = 'collapse';
    }

    const classes = mapToCssModules(classNames(
      className,
      collapseClass,
      navbar && 'navbar-collapse'
    ), cssModule);
    const style = height === null ? null : { height };
    return (
      <Tag
        {...attributes}
        style={{ ...attributes.style, ...style }}
        className={classes}
        ref={(c) => { this.element = c; }}
      />
    );
  }
}
export default Collapse;
