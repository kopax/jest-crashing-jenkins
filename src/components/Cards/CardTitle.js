import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
import H4 from '../Headings/H4';
const defaultProps = {
  tag: H4,
};

class CardTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'card-title'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

CardTitle.defaultProps = defaultProps;

export default CardTitle;
