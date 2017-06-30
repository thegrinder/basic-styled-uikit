import styled from 'styled-components';
import { bool } from 'prop-types';
import commonFormStyles from '../commonFormStyles';
import { inputNormalStyles, inputActiveStyles,
  inputDisabledStyles } from '../formHelpers';

const Input = styled.input`
  ${commonFormStyles}
  vertical-align: middle;
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

Input.propTypes = {
  isValid: bool,
};

Input.defaultProps = {
  isValid: true,
};

export default Input;
