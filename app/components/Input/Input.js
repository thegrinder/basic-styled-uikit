import styled from 'styled-components';
import { bool } from 'prop-types';
import { getInputTypeStyle } from 'helpers/form-styles';

const Input = styled.input`
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  padding: 0 10px;
  transition: .2s ease-in-out;
  transition-property: color,background-color,border-color;
  -webkit-appearance: none;
  overflow: visible;
  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  touch-action: manipulation;
  border-width: 1px;
  border-style: solid;
  background: #fff;
  height: 40px;
  ${getInputTypeStyle('regular')}
  &:focus {
    ${getInputTypeStyle('focus')}
    outline: none;
    background-color: #fff;
  }
`;

Input.propTypes = {
  isValid: bool.isRequired,
};

Input.defaultProps = {
  isValid: true,
};

export default Input;
