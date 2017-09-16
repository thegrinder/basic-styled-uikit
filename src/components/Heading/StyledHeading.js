import styled from 'styled-components';
import { string } from 'prop-types';
import { headingSizingStyle } from './headingHelpers';

const StyledHeading = styled.h1`
  color: #424242;
  display: block;
  margin: 0;
  padding: 0;
  ${headingSizingStyle}
`;

StyledHeading.propTypes = {
  sizing: string.isRequired,
};

export default StyledHeading;
