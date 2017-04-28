import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';


const defaultProps = {
  tag: 'div',
};

class CardImgOverlay extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
          'card-img-overlay'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

CardImgOverlay.defaultProps = defaultProps;

export default CardImgOverlay;
