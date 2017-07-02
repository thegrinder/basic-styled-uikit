import { css } from 'styled-components';
import sharedStyles from '../../helpers/sharedStyles';
import { miscNormalStyles, miscActiveStyles, miscCheckedStyles,
  miscDisabledStyles, inputNormalStyles, inputActiveStyles,
  inputDisabledStyles } from './formHelpers';

export const commonInputStyles = css`
  ${sharedStyles}
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
  ${inputNormalStyles}
  &:focus {
    outline: none;
    ${inputActiveStyles}
  }
  &:disabled {
    ${inputDisabledStyles}
  }
`;

export const miscInputStyles = css`
  ${sharedStyles}
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

