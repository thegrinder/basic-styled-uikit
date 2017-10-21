import React from 'react';
import { number, string } from 'prop-types';
import PlainButton from '../PlainButton/PlainButton';
import CloseIcon from './close_icon.inline.svg';

function CloseBtn(props) {
  const { iconSize, btnColor, btnHoverColor } = props;
  return (
    <PlainButton btnColor={btnColor} btnHoverColor={btnHoverColor} {...props}>
      <CloseIcon width={iconSize} height={iconSize} />
    </PlainButton>
  );
}

CloseBtn.propTypes = {
  iconSize: number,
  btnColor: string,
  btnHoverColor: string,
};

CloseBtn.defaultProps = {
  iconSize: 14,
  btnColor: '#999',
  btnHoverColor: '#666',
};

export default CloseBtn;
