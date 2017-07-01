import { css } from 'styled-components';
import { miscNormalStyles, miscActiveStyles, miscCheckedStyles,
  miscDisabledStyles } from './formHelpers';

export const commonInputReset = css`
  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  -webkit-appearance: none;
  touch-action: manipulation;
  overflow: visible;
  &:focus {
    outline: none;
  }
`;

export const miscInputReset = css`
  box-sizing: border-box;
  touch-action: manipulation;
  -webkit-appearance: none;
  overflow: hidden;
  padding: 0;
  display: inline-block;
  height: 16px;
  width: 16px;
  margin-top: -4px;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-width: 1px;
  border-style: solid;
  transition: .2s ease-in-out;
  transition-property: background-color, border;
  cursor: pointer;
  ${miscNormalStyles}
  &:focus {
    outline: none;
    ${miscActiveStyles}
  }
  &:checked {
    ${miscCheckedStyles}
  }
  &:disabled {
    ${miscDisabledStyles}
    cursor: default;
  }
`;

