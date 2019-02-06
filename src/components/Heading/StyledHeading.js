import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight } from '../../theme/typography';
import { calcLineHeight } from '../../helpers/utils';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
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
  ${({
    theme,
    color,
    sizing,
    marginBottom,
  }) => {
    const baseLineHeight = getBaseLineHeight(theme);
    const sizingStyle = getHeadingSizingStyle(theme, sizing);
    return css`
      ${getHeadingCommonStyle(theme, sizing)}
      color: ${getHeadingColor(theme, color)};
      line-height: ${calcLineHeight(sizingStyle.fontSize, baseLineHeight)};
      margin-bottom: ${marginBottom ? `${baseLineHeight}rem` : '0'};
      ${sizingStyle}
    `;
  }}
`;

StyledHeading.propTypes = propTypes;

export default StyledHeading;
