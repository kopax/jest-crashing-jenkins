import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
import H6 from '../Headings/H6';
const defaultProps = {
  tag: H6,
};

class CardSubtitle extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
          'card-subtitle'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;
