import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight } from '../../theme/typography';
import { calcLineHeight } from '../../helpers/utils';
import {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
} from './textHelpers';

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
  }) => css`
    ${getTextCommonStyle(theme)}
    ${getTextSizingStyle(theme, sizing)}
    color: ${getTextColor(theme, color)};
    line-height: ${calcLineHeight(
    getTextSizingStyle(theme, sizing).fontSize,
    getBaseLineHeight(theme),
  )};
    margin-bottom: ${marginBottom ? `${getBaseLineHeight(theme)}rem` : '0'};
  `}
`;

StyledText.propTypes = propTypes;

export default StyledText;
