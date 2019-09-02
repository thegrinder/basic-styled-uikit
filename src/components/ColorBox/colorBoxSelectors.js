import { getColorBox, getMode } from '../../theme/themeSelectors';

export const getBoxBgColor = (theme, bgColor) => {
  const mode = getMode(theme);
  return getColorBox(theme).bgColors[mode][bgColor];
};

export const getBoxElevation = (theme, elevation) => {
  const mode = getMode(theme);
  return getColorBox(theme).elevations[mode][elevation];
};
