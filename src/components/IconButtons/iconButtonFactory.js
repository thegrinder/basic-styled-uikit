import React from 'react';
import { number, string } from 'prop-types';
import PlainButton from '../PlainButton/PlainButton';


function iconButtonFactory(Icon, defaults = {}) {
  function IconButtonWrapper(props) {
    const { iconSize, btnColor, btnHoverColor } = props;
    return (
      <PlainButton btnColor={btnColor} btnHoverColor={btnHoverColor} {...props}>
        <Icon width={iconSize} height={iconSize} />
      </PlainButton>
    );
  }

  IconButtonWrapper.propTypes = {
    iconSize: number,
    btnColor: string,
    btnHoverColor: string,
  };

  const {
    iconSize = 20,
    btnColor = '#999',
    btnHoverColor = '#666',
  } = defaults;

  IconButtonWrapper.defaultProps = {
    iconSize,
    btnColor,
    btnHoverColor,
  };

  return IconButtonWrapper;
}

export default iconButtonFactory;
