import { css } from 'styled-components';

const commonFormStyles = css`
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

export default commonFormStyles;
