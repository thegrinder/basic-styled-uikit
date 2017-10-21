import React from 'react';
import { number, string } from 'prop-types';
import PlainButton from '../PlainButton/PlainButton';
import MenuIcon from './menu_icon.inline.svg';

function MenuBtn(props) {
  const { iconSize, btnColor, btnHoverColor } = props;
  return (
    <PlainButton btnColor={btnColor} btnHoverColor={btnHoverColor} {...props}>
      <MenuIcon width={iconSize} height={iconSize} />
    </PlainButton>
  );
}

MenuBtn.propTypes = {
  iconSize: number,
  btnColor: string,
  btnHoverColor: string,
};

MenuBtn.defaultProps = {
  iconSize: 20,
  btnColor: '#999',
  btnHoverColor: '#666',
};

export default MenuBtn;
