import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight } from '../../theme/typography';
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
  margin-bottom: ${props => (props.marginBottom ? `${getBaseLineHeight(props)}rem` : '0')};
`;

StyledHeading.propTypes = propTypes;

export default StyledHeading;
