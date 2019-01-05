import { bool } from 'prop-types';
import styled from 'styled-components';
import {
  inlineInputNormalStyle,
  inlineInputHoverStyle,
  inlineInputActiveStyle,
  inlineInputDisabledStyle,
  inlineInputCommonStyle,
} from '../formHelpers';
import { rem } from '../../../helpers/utils';

const propTypes = {
  invalid: bool.isRequired,
  submitting: bool.isRequired,
};

const StyledInlineInput = styled.input`
  margin: 0;
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
  border-radius: ${rem(6)};
  height: ${rem(40)};
  padding: 0 ${rem(10)};
  ${inlineInputCommonStyle}
  ${({ submitting }) => (submitting ? `padding-right : ${rem(36)};` : '')}
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

StyledInlineInput.propTypes = propTypes;

export default StyledInlineInput;
