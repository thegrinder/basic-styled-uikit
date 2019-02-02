import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight, calcLineHeight } from '../../theme/typography';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
} from './headingTheme';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledHeading = styled.h1(({
  theme,
  sizing,
  color,
  marginBottom,
}) => ({
  display: 'block',
  margin: 0,
  padding: 0,
  lineHeight: calcLineHeight(
    getHeadingSizingStyle(theme, sizing).fontSize,
    getBaseLineHeight(theme),
  ),
  marginBottom: marginBottom ? `${getBaseLineHeight(theme)}rem` : 0,
  color: getHeadingColor(theme, color),
  ...getHeadingSizingStyle(theme, sizing),
  ...getHeadingCommonStyle(theme),
}));

StyledHeading.propTypes = propTypes;

export default StyledHeading;
