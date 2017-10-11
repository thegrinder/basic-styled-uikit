import styled from 'styled-components';
import { string } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import { headingSizingStyle, headingColourStyle } from './headingHelpers';

const StyledHeading = styled.h1`
  ${sharedStyles}
  display: block;
  margin: 0;
  padding: 0;
  ${headingSizingStyle}
  ${headingColourStyle}
`;

StyledHeading.propTypes = {
  sizing: string.isRequired,
  colour: string.isRequired,
};

export default StyledHeading;
