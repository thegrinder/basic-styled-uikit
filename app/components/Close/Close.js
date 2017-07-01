import React from 'react';
import { number, string } from 'prop-types';
import CloseButton from './CloseButton';
import CloseIcon from './close_icon.inline.svg';

function Close({ iconSize, btnColor, btnHoverColor }) {
  return (
      <CloseButton btnColor={btnColor} btnHoverColor={btnHoverColor}>
        <CloseIcon width={iconSize} height={iconSize} />
      </CloseButton>
  );
}

Close.propTypes = {
  iconSize: number.isRequired,
  btnColor: string.isRequired,
  btnHoverColor: string.isRequired,
};

Close.defaultProps = {
  iconSize: 14,
  btnColor: '#999',
  btnHoverColor: '#666',
};

export default Close;
