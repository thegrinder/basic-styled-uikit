import { getText, getMode } from '../../theme/themeSelectors';

export const getTextSizingStyle = (theme, sizing) => {
  const sizingStyle = getText(theme).sizings[sizing];
  if (!sizingStyle) {
    throw new Error(`There is no ${sizing} size in the <Text /> theme`);
  }
  return sizingStyle;
};

export const getTextColor = (theme, color) => {
  const mode = getMode(theme);
  const textColor = getText(theme).colors[mode][color];
  if (!textColor) {
    throw new Error(`There is no ${textColor} color in the <Text /> theme`);
  }
  return textColor;
};

export const getTextColorOnBg = (theme, bgColor, color) => {
  const mode = getMode(theme);
  const bgColors = getText(theme).onBackground[mode][bgColor];
  if (bgColors && bgColors[color]) {
    return bgColors[color];
  }
  return getTextColor(theme, color);
};

export const getTextOpacity = (theme, emphasis) => {
  const textOpacity = getText(theme).opacities[emphasis];
  if (!textOpacity) {
    throw new Error(`There is no ${emphasis} opacity in the <Text /> theme`);
  }
  return textOpacity;
};

export const getTextCommonStyle = theme => getText(theme).common;
