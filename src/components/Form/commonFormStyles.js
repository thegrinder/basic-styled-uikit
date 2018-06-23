import { css } from 'styled-components';
import {
  miscNormalStyle, miscActiveStyle, miscCheckedStyle,
  miscDisabledStyle, inputNormalStyle, inputActiveStyle,
  inputDisabledStyle,
} from './formHelpers';
import { rem } from '../../helpers/utils';

export const commonInputStyles = css`
  margin: 0;
  border-radius: 0;
  -webkit-appearance: none;
  touch-action: manipulation;
  max-width: 100%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  transition: .2s ease-in-out;
  transition-property: color, background-color, border;
  ${inputNormalStyle}
  &:focus {
    outline: none;
    ${inputActiveStyle}
  }
  &:disabled {
    ${inputDisabledStyle}
  }
`;

export const miscInputStyles = css`
  touch-action: manipulation;
  -webkit-appearance: none;
  overflow: hidden;
  padding: 0;
  display: inline-block;
  height: ${rem(16)};
  width: ${rem(16)};
  margin-top: ${rem(-4)};
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-width: 1px;
  border-style: solid;
  transition: .2s ease-in-out;
  transition-property: background-color, border;
  cursor: pointer;
  ${miscNormalStyle}
  &:focus {
    outline: none;
    ${miscActiveStyle}
  }
  &:checked {
    ${miscCheckedStyle}
  }
  &:disabled {
    ${miscDisabledStyle}
    cursor: default;
  }
`;
