import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight } from '../../theme/typography';
import { calcLineHeight } from '../../helpers/utils';
import {
  getTextSizing,
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
    getTextSizing(theme, sizing).fontSize,
    getBaseLineHeight({ theme }),
  ),
  marginBottom: marginBottom ? `${getBaseLineHeight({ theme })}rem` : 0,
  color: getTextColor(theme, color),
  ...getTextSizing(theme, sizing),
  ...getTextCommonStyle(theme),
}));

StyledText.propTypes = propTypes;

export default StyledText;
