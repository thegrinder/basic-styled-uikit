import styled from 'styled-components';
import { string, bool } from 'prop-types';
import {
  headingSizingStyle,
  headingColorStyle,
  headingCommonStyle,
} from './headingHelpers';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledHeading = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  ${headingCommonStyle}
  ${headingSizingStyle}
  ${headingColorStyle}
  ${({ marginBottom }) => !marginBottom && (
    'margin-bottom: 0;'
  )}
`;

StyledHeading.propTypes = propTypes;

export default StyledHeading;
