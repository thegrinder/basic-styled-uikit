import React from 'react';
import { number, string } from 'prop-types';
import PlainButton from '../PlainButton/PlainButton';
import CloseIcon from './close_icon.inline.svg';

function Close(props) {
  const { iconSize, btnColor, btnHoverColor } = props;
  return (
    <PlainButton btnColor={btnColor} btnHoverColor={btnHoverColor} {...props}>
      <CloseIcon width={iconSize} height={iconSize} />
    </PlainButton>
  );
}

Close.propTypes = {
  iconSize: number,
  btnColor: string,
  btnHoverColor: string,
};

Close.defaultProps = {
  iconSize: 14,
  btnColor: '#999',
  btnHoverColor: '#666',
};

export default Close;
