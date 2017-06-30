import { css } from 'styled-components';

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
  &:focus {
    outline: none;
  }
`;

