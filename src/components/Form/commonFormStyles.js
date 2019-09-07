import { css } from 'styled-components';
import {
  getRegularInputCommonStyle,
  getRegularInputStyle,
  getMiscInputCommonStyle,
  getMiscInputStyle,
} from './formSelectors';
import { rem } from '../../theme/typography';

export const commonInputStyles = css`
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color, border;
  border-radius: ${rem(6)};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: inherit;
  }
  ${({ theme, invalid }) => css`
    ${getRegularInputCommonStyle(theme)}
    ${getRegularInputStyle(theme, invalid, 'normal')}
    &:focus {
      ${getRegularInputStyle(theme, invalid, 'active')}
    }
    &:disabled {
      ${getRegularInputStyle(theme, invalid, 'disabled')}
    }
  `}
`;

export const miscInputStyles = css`
  -webkit-appearance: none;
  overflow: hidden;
  display: inline-block;
  font-size: ${rem(16)};
  height: 1.5em;
  width: 1.5em;
  margin-top: -0.4em;
  vertical-align: middle;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-width: 1px;
  border-style: solid;
  transition: 0.2s ease-in-out;
  transition-property: background-color, border;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
  ${({ theme, invalid }) => css`
    ${getMiscInputCommonStyle(theme)}
    ${getMiscInputStyle(theme, invalid, 'normal')}
    &:focus {
      ${getMiscInputStyle(theme, invalid, 'active')}
    }
    &:checked {
      ${getMiscInputStyle(theme, invalid, 'checked')}
    }
  `}
`;
