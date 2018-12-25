import styled from 'styled-components';
import { oneOf, node } from 'prop-types';
import {
  btnNormalStyle,
  btnHoverStyle,
  btnActiveStyle,
  btnSizeStyle,
} from './buttonHelpers';

const propTypes = {
  btnType: oneOf(['default', 'primary', 'secondary', 'danger']).isRequired,
  btnSize: oneOf(['small', 'default', 'large']).isRequired,
  left: node,
  right: node,
};

const StyledButton = styled.button`
  margin: 0;
  border: none;
  overflow: visible;
  position: relative;
  display: inline-block;
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
  letter-spacing: 1px;
  ${btnSizeStyle}
  ${btnNormalStyle}
  ${({ left }) => (left ? 'padding-left: 0;' : '')}
  ${({ right }) => (right ? 'padding-right: 0;' : '')}
  &:hover,
  &:focus {
    ${btnHoverStyle}
  }
  &:active {
    ${btnActiveStyle}
  }
  &:disabled {
    ${btnNormalStyle}
    opacity: .6;
    cursor: default;
  }
`;

StyledButton.propTypes = propTypes;

export default StyledButton;
