import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${commonInputStyles}
  vertical-align: middle;
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  overflow: visible;
`;

TextInput.propTypes = {
  isValid: bool.isRequired,
};

TextInput.defaultProps = {
  isValid: true,
};

export default TextInput;
