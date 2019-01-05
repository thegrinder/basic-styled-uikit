import styled from 'styled-components';
import { string } from 'prop-types';
import { textSizingStyle, textColorStyle } from './textHelpers';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
};

const StyledText = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  ${textSizingStyle}
  ${textColorStyle}
`;

StyledText.propTypes = propTypes;

export default StyledText;
