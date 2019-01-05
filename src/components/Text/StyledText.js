import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { textSizingStyle, textColorStyle } from './textHelpers';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledText = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  ${textSizingStyle}
  ${textColorStyle}
  ${({ marginBottom }) => !marginBottom && (
    'margin-bottom: 0;'
  )}
`;

StyledText.propTypes = propTypes;

export default StyledText;
