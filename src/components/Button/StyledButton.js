import styled from 'styled-components';
import { node, string } from 'prop-types';
import { rem } from '../../helpers/utils';
import {
  btnNormalStyle,
  btnHoverStyle,
  btnActiveStyle,
  btnSizingStyle,
  btnCommonStyle,
} from './buttonHelpers';

const propTypes = {
  btntype: string.isRequired,
  sizing: string.isRequired,
  left: node,
  right: node,
};

const StyledButton = styled.button`
  margin: 0;
  border: none;
  overflow: visible;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  transition: .1s ease-in-out;
  transition-property: color, background-color, border-color;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-radius: ${rem(6)};
  ${btnCommonStyle}
  ${btnSizingStyle}
  ${btnNormalStyle}
  ${({ left }) => (left && 'padding-left: 0;')}
  ${({ right }) => (right && 'padding-right: 0;')}
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
