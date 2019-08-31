import { getColorBox } from '../../theme/themeSelectors';

export const getBoxBgColor = (theme, bgColor) => (
  getColorBox(theme).bgColors[bgColor]
);

export const getBoxElevation = (theme, elevation) => (
  getColorBox(theme).elevations[elevation]
);
