import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight, calcLineHeight } from '../../theme/typography';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
  getHeadingOpacity,
} from './headingSelectors';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
  emphasis: string.isRequired,
};

const StyledHeading = styled.h1`
  display: block;
  ${({
    theme,
    color,
    sizing,
    marginBottom,
    emphasis,
  }) => {
    const baseLineHeight = getBaseLineHeight(theme);
    const sizingStyle = getHeadingSizingStyle(theme, sizing);
    return css`
      ${getHeadingCommonStyle(theme, sizing)}
      color: ${getHeadingColor(theme, color)};
      line-height: ${calcLineHeight(sizingStyle.fontSize, baseLineHeight)};
      margin-bottom: ${marginBottom ? `${baseLineHeight}rem` : '0'};
      opacity: ${getHeadingOpacity(theme, emphasis)};
      ${sizingStyle}
    `;
  }}
`;

StyledHeading.propTypes = propTypes;

export default StyledHeading;
