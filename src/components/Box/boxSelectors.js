import { createSelector } from '../../helpers';

export const getBox = createSelector('box');

export const getBoxBgColor = (theme, bgColor) => {
  const boxBgColor = getBox(theme).bgColors[bgColor];
  if (!boxBgColor) {
    throw new Error(
      `There is no ${bgColor} background color in the <Box /> theme`
    );
  }
  return boxBgColor;
};

export const getBackgroundColor = bgColor => ({ theme }) =>
  getBoxBgColor(theme, bgColor);

export const getBoxElevation = (theme, elevation) => {
  const boxElevation = getBox(theme).elevations[elevation];
  if (!boxElevation) {
    throw new Error(`There is no ${boxElevation} elevation the <Box /> theme`);
  }
  return boxElevation;
};
