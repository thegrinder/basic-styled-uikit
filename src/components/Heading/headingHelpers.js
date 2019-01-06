import Shevy from 'shevyjs';
import { css } from 'styled-components';
import { createStyles, getStyle } from '../../helpers/utils';
import { defaultOptions } from '../../theme/typography';

const getHeadingSizingOptions = theme => ({
  ...defaultOptions,
  ...theme.uiKit.typography.global,
  ...theme.uiKit.heading.baseFontScale,
});

export const headingSizingStyle = ({ theme, sizing }) => {
  const shevyOptions = getHeadingSizingOptions(theme);
  const sizingStyles = new Shevy(shevyOptions)[sizing];
  return createStyles(sizingStyles);
};

const getHeadingColor = (theme, color) => theme.uiKit.heading.colors[color];
export const headingColorStyle = ({ theme, color }) => (
  css`color: ${getHeadingColor(theme, color)};`
);

const getHeadingCommonStyle = ({ theme }) => theme.uiKit.heading.common;
export const headingCommonStyle = getStyle(getHeadingCommonStyle);
