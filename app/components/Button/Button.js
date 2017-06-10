import styled from 'styled-components';
import { getBtnTypeStyle, getBtnSizeStyle } from 'helpers/button-styles';

const Button = styled.button`
  margin: 0;
  border: none;
  overflow: visible;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-in-out;
  transition-property: color, background-color, border-color;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  ${getBtnSizeStyle}
  ${getBtnTypeStyle('regular')}
  &:hover,
  &:focus {
    ${getBtnTypeStyle('hover')}
  }
  &:active {
    ${getBtnTypeStyle('pressed')}
  }
  &:disabled {
    ${getBtnTypeStyle('regular')}
    opacity: .6;
    cursor: default;
  }
`;

Button.defaultProps = {
  btnType: 'default',
  btnSize: 'default',
};

export default Button;
