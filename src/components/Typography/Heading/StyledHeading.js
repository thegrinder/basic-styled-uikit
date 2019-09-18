import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight, calcLineHeight } from '../typographySelectors';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingColorOnBg,
  getHeadingCommonStyle,
  getHeadingOpacity,
} from './headingSelectors';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
  emphasis: string.isRequired,
  ignoreBackground: bool.isRequired,
  bgColor: string,
};

const StyledHeading = styled.h1`
  display: block;
  ${({
    theme,
    color,
    sizing,
    marginBottom,
    emphasis,
    ignoreBackground,
    bgColor,
  }) => {
    const baseLineHeight = getBaseLineHeight(theme);
    const sizingStyle = getHeadingSizingStyle(theme, sizing);
    return css`
      ${getHeadingCommonStyle(theme, sizing)}
      color: ${
        ignoreBackground
          ? getHeadingColor(theme, color)
          : getHeadingColorOnBg(theme, bgColor, color)
      };
      line-height: ${calcLineHeight(sizingStyle?.fontSize, baseLineHeight)};
      margin-bottom: ${marginBottom ? `${baseLineHeight}rem` : '0'};
      opacity: ${getHeadingOpacity(theme, emphasis)};
      ${sizingStyle}
    `;
  }}
`;

StyledHeading.propTypes = propTypes;

export default StyledHeading;
