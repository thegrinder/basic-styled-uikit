import Shevy from 'shevyjs';
import { css } from 'styled-components';
import { getColor } from '../../theme/colors';
import { getTextOptions } from '../../theme/typography';
import { createStyles } from '../../helpers/utils';

const textSizingProps = {
  t1: 'h1',
  t2: 'h2',
  t3: 'h3',
  t4: 'h4',
  t5: 'h5',
  t6: 'h6',
};

export const textSizingStyle = ({ theme, sizing }) => {
  const shevyOptions = getTextOptions(theme);
  const sizingStyles = new Shevy(shevyOptions)[textSizingProps[sizing]];
  return createStyles(sizingStyles);
};

export const textColorStyle = ({ theme, color }) => (
  css`color: ${getColor(theme, color)};`
);
