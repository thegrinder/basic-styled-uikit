import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight, calcLineHeight } from '../../theme/typography/typographySelectors';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
} from './headingSelectors';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledHeading = styled.h1`
  display: block;
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
