import { getColorBox, getMode } from '../../theme/themeSelectors';

export const getBoxBgColor = (theme, bgColor) => {
  const mode = getMode(theme);
  const boxBgColor = getColorBox(theme).bgColors[mode][bgColor];
  if (!boxBgColor) {
    throw new Error(
      `There is no ${bgColor} background color in the <ColorBox /> theme`
    );
  }
  return boxBgColor;
};

export const getBoxElevation = (theme, elevation) => {
  const mode = getMode(theme);
  const boxElevation = getColorBox(theme).elevations[mode][elevation];
  if (!boxElevation) {
    throw new Error(
      `There is no ${boxElevation} elevation the <ColorBox /> theme`
    );
  }
  return boxElevation;
};
