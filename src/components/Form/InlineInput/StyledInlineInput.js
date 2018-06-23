import styled from 'styled-components';
import {
  inlineInputNormalStyle, inlineInputHoverStyle, inlineInputActiveStyle,
  inlineInputDisabledStyle,
} from '../formHelpers';
import { rem } from '../../../helpers/utils';

const StyledInlineInput = styled.input`
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
  overflow: visible;

  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
  padding: 0 ${rem(10)};
  ${inlineInputNormalStyle}
  &:hover {
    ${inlineInputHoverStyle}
  }
  &:focus {
    outline: none;
    ${inlineInputActiveStyle}
  }
  &:disabled {
    ${inlineInputDisabledStyle}
  }
`;

export default StyledInlineInput;
