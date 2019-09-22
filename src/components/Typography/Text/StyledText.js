import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';

import { getBaseLineHeight, calcLineHeight } from '../typographySelectors';
import {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
  getTextOpacity,
  getTextColorOnBg,
} from './textSelectors';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
  emphasis: string.isRequired,
  ignoreBackground: bool.isRequired,
  bgColor: string,
};

const StyledText = styled.span`
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
    const sizingStyle = getTextSizingStyle(theme, sizing);
    return css`
      ${getTextCommonStyle(theme)}
      color: ${
        ignoreBackground
          ? getTextColor(theme, color)
          : getTextColorOnBg(theme, bgColor, color)
      };
      line-height: ${calcLineHeight(sizingStyle?.fontSize)};
      margin-bottom: ${marginBottom ? `${getBaseLineHeight(theme)}rem` : '0'};
      opacity: ${getTextOpacity(theme, emphasis)};
      ${sizingStyle}
    `;
  }}
`;

StyledText.propTypes = propTypes;

export default StyledText;
