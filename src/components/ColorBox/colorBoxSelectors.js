import { createSelector } from '../../helpers';

export const getColorBox = createSelector('colorBox');

export const getBoxBgColor = (theme, bgColor) => {
  const boxBgColor = getColorBox(theme).bgColors[bgColor];
  if (!boxBgColor) {
    throw new Error(
      `There is no ${bgColor} background color in the <ColorBox /> theme`
    );
  }
  return boxBgColor;
};

export const getBoxElevation = (theme, elevation) => {
  const boxElevation = getColorBox(theme).elevations[elevation];
  if (!boxElevation) {
    throw new Error(
      `There is no ${boxElevation} elevation the <ColorBox /> theme`
    );
  }
  return boxElevation;
};
