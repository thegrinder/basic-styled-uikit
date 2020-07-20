import { getColorBox } from '../../theme/themeSelectors';

export const getBoxBgColor = (theme, bgColor) =>
  getColorBox(theme).bgColors[bgColor];

export const getBoxBorderColor = (theme, borderColor) =>
  getColorBox(theme).borderColors[borderColor];
