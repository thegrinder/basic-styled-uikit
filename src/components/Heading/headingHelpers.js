import Shevy from 'shevyjs';
import { css } from 'styled-components';
import { getColor } from '../../theme/colors';
import { getHeadingOptions } from '../../theme/typography';
import { createStyles } from '../../helpers/utils';

export const headingSizingStyle = ({ theme, sizing }) => {
  const shevyOptions = getHeadingOptions(theme);
  const sizingStyles = new Shevy(shevyOptions)[sizing];
  return createStyles(sizingStyles);
};

export const headingColorStyle = ({ theme, color }) => (
  css`color: ${getColor(theme, color)};`
);
