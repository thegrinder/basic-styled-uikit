import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight } from '../../theme/typography';
import { calcLineHeight } from '../../helpers/utils';
import {
  getHeadingSizing,
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
  line-height: ${props => calcLineHeight(
    getHeadingSizing(props).fontSize,
    getBaseLineHeight(props),
  )};
  margin-bottom: ${props => (props.marginBottom
    ? `${getBaseLineHeight(props)}rem`
    : '0')};
`;

StyledHeading.propTypes = propTypes;

export default StyledHeading;
