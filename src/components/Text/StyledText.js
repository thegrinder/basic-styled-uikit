import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight, calcLineHeight } from '../../theme/typography';
import {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
} from './textTheme';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledText = styled.span(({
  theme,
  color,
  sizing,
  marginBottom,
}) => ({
  display: 'block',
  margin: 0,
  padding: 0,
  lineHeight: calcLineHeight(
    getTextSizingStyle(theme, sizing).fontSize,
    getBaseLineHeight(theme),
  ),
  marginBottom: marginBottom ? `${getBaseLineHeight(theme)}rem` : 0,
  color: getTextColor(theme, color),
  ...getTextSizingStyle(theme, sizing),
  ...getTextCommonStyle(theme),
}));

StyledText.propTypes = propTypes;

export default StyledText;
