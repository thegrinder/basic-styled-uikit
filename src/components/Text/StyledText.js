import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';

import { getBaseLineHeight, calcLineHeight } from '../../theme/typography';
import { getTextSizingStyle, getTextColor, getTextCommonStyle } from './textSelectors';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledText = styled.span`
  display: block;
  ${({
    theme,
    color,
    sizing,
    marginBottom,
  }) => {
    const baseLineHeight = getBaseLineHeight(theme);
    const sizingStyle = getTextSizingStyle(theme, sizing);
    return css`
      ${getTextCommonStyle(theme)}
      color: ${getTextColor(theme, color)};
      line-height: ${calcLineHeight(sizingStyle.fontSize, baseLineHeight)};
      margin-bottom: ${marginBottom ? `${getBaseLineHeight(theme)}rem` : '0'};
      ${sizingStyle}
    `;
  }}
`;

StyledText.propTypes = propTypes;

export default StyledText;
