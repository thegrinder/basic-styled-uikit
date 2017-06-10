import styled from 'styled-components';
import { getBtnStateStyle } from 'helpers/button-styles';

const Button = styled.button`
  margin: 0;
  border: none;
  overflow: visible;
  font: inherit;
  color: inherit;
  text-transform: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 30px;
  vertical-align: middle;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-in-out;
  transition-property: color, background-color, border-color;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: #222;
  border-width: 1px;
  border-style: solid;
  ${getBtnStateStyle('default', 'regular')}
  &:hover,
  &:focus {
    ${getBtnStateStyle('default', 'hover')}
  }
  &:active {
    ${getBtnStateStyle('default', 'pressed')}
  }
  &:disabled {
    ${getBtnStateStyle('default', 'disabled')}
  }
`;

export default Button;
