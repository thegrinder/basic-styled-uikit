import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputReset } from '../commonFormStyles';
import { inputNormalStyles, inputActiveStyles,
  inputDisabledStyles } from '../formHelpers';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${commonInputReset}
  vertical-align: middle;
  overflow: visible;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  padding: 0 10px;
  transition: .2s ease-in-out;
  transition-property: color, background-color, border-color;
  border-width: 1px;
  border-style: solid;
  background: #fff;
  height: 40px;
  ${inputNormalStyles}
  &:focus {
    ${inputActiveStyles}
    background-color: #fff;
  }
  &:disabled {
    ${inputDisabledStyles}
  }
`;

TextInput.propTypes = {
  isValid: bool,
};

TextInput.defaultProps = {
  isValid: true,
};

export default TextInput;
