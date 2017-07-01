import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';

const Textarea = styled.textarea`
  ${commonInputStyles}
  padding: 4px 10px;
  vertical-align: top;
  overflow: auto;
`;

Textarea.propTypes = {
  isValid: bool,
};

Textarea.defaultProps = {
  isValid: true,
};

export default Textarea;
