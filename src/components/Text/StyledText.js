import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';

import { getBaseLineHeight } from '../../theme/typography';
import { calcLineHeight } from '../../helpers/utils';
import { getTextSizingStyle, getTextColor, getTextCommonStyle } from './textHelpers';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledText = styled.span`
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
