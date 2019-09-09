import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { rem } from '../../Typography';
import {
  getBtnTypeStyle,
  getBtnSizingStyle,
  getBtnCommonStyle,
} from './buttonSelectors';

const propTypes = {
  btntype: string.isRequired,
  sizing: string.isRequired,
};

const StyledButton = styled.button`
  border: none;
  overflow: visible;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  transition: 0.1s ease-in-out;
  transition-property: color, background-color, border-color;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  border-radius: ${rem(6)};
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  ${({ theme, btntype, sizing }) => css`
    ${getBtnCommonStyle(theme)}
    ${getBtnSizingStyle(theme, sizing)}
    ${getBtnTypeStyle(theme, btntype, 'normal')}
    &:hover,
    &:focus {
      ${getBtnTypeStyle(theme, btntype, 'hover')}
    }
    &:active {
      ${getBtnTypeStyle(theme, btntype, 'active')}
    }
    &:disabled {
      ${getBtnTypeStyle(theme, btntype, 'normal')}
    }
  `}
`;

StyledButton.propTypes = propTypes;

export default StyledButton;
