import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';
import { rem } from '../../Typography';

const propTypes = {
  invalid: bool.isRequired,
};

const StyledInput = styled.input`
  ${commonInputStyles}
  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
  padding: 0 ${rem(10)};
  overflow: visible;
`;

StyledInput.propTypes = propTypes;

export default StyledInput;
