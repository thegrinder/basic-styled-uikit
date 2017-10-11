import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';
import { rem } from '../../../helpers/utils';

const Textarea = styled.textarea`
  ${commonInputStyles}
  padding: ${rem(4)} ${rem(10)};
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
