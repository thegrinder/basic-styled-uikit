import styled, { css } from 'styled-components';
import { node, string } from 'prop-types';
import { rem } from '../../theme/typography/typographySelectors';
import {
  getBtnTypeStyle,
  getBtnSizingStyle,
  getBtnCommonStyle,
} from './buttonSelectors';

const propTypes = {
  btntype: string.isRequired,
  sizing: string.isRequired,
  left: node,
  right: node,
};

const StyledButton = styled.button`
  border: none;
  overflow: visible;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  transition: .1s ease-in-out;
  transition-property: color, background-color, border-color;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-radius: ${rem(6)};
  &:disabled {
    opacity: .6;
    cursor: default;
  }
  ${({
    theme,
    btntype,
    sizing,
    left,
    right,
  }) => css`
    ${getBtnCommonStyle(theme)}
    ${getBtnSizingStyle(theme, sizing)}
    ${getBtnTypeStyle(theme, btntype, 'normal')}
    ${left && 'padding-left: 0;'}
    ${right && 'padding-right: 0;'}
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
