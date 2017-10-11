import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';
import { rem } from '../../../helpers/utils';

const Input = styled.input`
  ${commonInputStyles}
  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
  padding: 0 ${rem(10)};
  overflow: visible;
`;

Input.propTypes = {
  isValid: bool,
};

Input.defaultProps = {
  isValid: true,
};

export default Input;
