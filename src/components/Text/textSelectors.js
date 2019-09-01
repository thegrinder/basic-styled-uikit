import { getText } from '../../theme/themeSelectors';

export const getTextSizingStyle = (theme, sizing) => getText(theme).sizings[sizing] || {};

export const getTextColor = (theme, color) => getText(theme).colors[color];

export const getTextColorOnBg = (theme, bgColor, color) => {
  const surfaceColors = getText(theme).onBackground[bgColor];
  if (surfaceColors && surfaceColors[color]) {
    return surfaceColors[color];
  }
  return getTextColor(theme, color);
};

export const getTextOpacity = (theme, emphasis) => getText(theme).opacities[emphasis];

export const getTextCommonStyle = theme => getText(theme).common;
