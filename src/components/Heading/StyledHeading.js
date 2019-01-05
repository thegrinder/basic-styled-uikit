import styled from 'styled-components';
import { string } from 'prop-types';
import { headingSizingStyle, headingColorStyle } from './headingHelpers';

const propTypes = {
  colour: string.isRequired,
  sizing: string.isRequired,
};

export const StyledHeading = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  ${headingSizingStyle}
  ${headingColorStyle}
`;

StyledHeading.propTypes = propTypes;

export default StyledHeading;
