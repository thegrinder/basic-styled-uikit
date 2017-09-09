import styled from 'styled-components';
import { string } from 'prop-types';
import { headingSizingStyle } from './headingHelpers';

const StyledHeading = styled.h1`
  color: #424242;
  display: block;
  margin: 0;
  padding: 0;
  font-weight: 500;
  letter-spacing: -.5px;
  ${headingSizingStyle}
`;

StyledHeading.propTypes = {
  sizing: string.isRequired,
};

export default StyledHeading;
