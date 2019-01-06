import Shevy from 'shevyjs';
import { css } from 'styled-components';
import { createStyles, getStyle } from '../../helpers/utils';

const textSizingProps = {
  t1: 'h1',
  t2: 'h2',
  t3: 'h3',
  t4: 'h4',
  t5: 'h5',
  t6: 'h6',
};

const getTextSizingOptions = theme => ({
  ...theme.uiKit.typography,
  baseFontScale: theme.uiKit.text.baseFontScale,
});

export const textSizingStyle = ({ theme, sizing }) => {
  const shevyOptions = getTextSizingOptions(theme);
  const sizingStyles = new Shevy(shevyOptions)[textSizingProps[sizing]];
  return createStyles(sizingStyles);
};

const getTextColor = (theme, color) => theme.uiKit.text.colors[color];
export const textColorStyle = ({ theme, color }) => (
  css`color: ${getTextColor(theme, color)};`
);

const getTextCommonStyle = ({ theme }) => theme.uiKit.text.common;
export const textCommonStyle = getStyle(getTextCommonStyle);
