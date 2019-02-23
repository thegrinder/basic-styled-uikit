import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';
import { rem } from '../../../theme/typography/typographySelectors';

const propTypes = {
  invalid: bool.isRequired,
};

const StyledTextarea = styled.textarea`
  ${commonInputStyles}
  padding: ${rem(4)} ${rem(10)};
  vertical-align: top;
  overflow: auto;
`;

StyledTextarea.propTypes = propTypes;

export default StyledTextarea;
