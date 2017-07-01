import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';

const Input = styled.input`
  ${commonInputStyles}
  vertical-align: middle;
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  overflow: visible;
`;

Input.propTypes = {
  isValid: bool.isRequired,
};

Input.defaultProps = {
  isValid: true,
};

export default Input;
