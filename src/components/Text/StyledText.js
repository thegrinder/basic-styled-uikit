import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';

import { getBaseLineHeight, calcLineHeight } from '../../theme/typography';
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
  ignoreBg: bool.isRequired,
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
    ignoreBg,
    bgColor,
  }) => {
    const baseLineHeight = getBaseLineHeight(theme);
    const sizingStyle = getTextSizingStyle(theme, sizing);
    return css`
      ${getTextCommonStyle(theme)}
      color: ${ignoreBg ? getTextColor(theme, color) : getTextColorOnBg(theme, bgColor, color)};
      line-height: ${calcLineHeight(sizingStyle.fontSize, baseLineHeight)};
      margin-bottom: ${marginBottom ? `${getBaseLineHeight(theme)}rem` : '0'};
      opacity: ${getTextOpacity(theme, emphasis)};
      ${sizingStyle}
    `;
  }}
`;

StyledText.propTypes = propTypes;

export default StyledText;
