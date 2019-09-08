import { getTypography } from '../../../theme/themeSelectors';

export const getTextSizingStyle = (theme, sizing) => {
  const sizingStyle = getTypography(theme).text.sizings[sizing];
  if (!sizingStyle) {
    throw new Error(`There is no ${sizing} size in the <Text /> theme`);
  }
  return sizingStyle;
};

export const getTextColor = (theme, color) => {
  let textColor;

  const baseColors = getTypography(theme).colors;
  if (baseColors && baseColors[color]) {
    textColor = baseColors[color];
  }

  const textColors = getTypography(theme).text.colors;
  if (textColors && textColors[color]) {
    textColor = textColors[color];
  }

  if (!textColor) {
    throw new Error(`There is no ${color} color in the <Text /> theme`);
  }
  return textColor;
};

export const getTextColorOnBg = (theme, bgColor, color) => {
  let textColor;

  const baseColors = getTypography(theme).colors;
  if (baseColors && baseColors[color]) {
    textColor = baseColors[color];
  }

  const baseBgColors = getTypography(theme).onBackground;
  if (baseBgColors && baseBgColors[bgColor] && baseBgColors[bgColor][color]) {
    textColor = baseBgColors[bgColor][color];
  }

  const textTheme = getTypography(theme).text;
  if (
    textTheme &&
    textTheme.onBackground &&
    textTheme.onBackground[bgColor] &&
    textTheme.onBackground[bgColor][color]
  ) {
    textColor = textTheme.onBackground[bgColor][color];
  }

  if (!textColor) {
    throw new Error(
      `There is no ${color} color set for ${bgColor} background color in typography theme`
    );
  }

  return textColor;
};

export const getTextOpacity = (theme, emphasis) => {
  const textOpacity = getTypography(theme).opacities[emphasis];
  if (!textOpacity) {
    throw new Error(`There is no ${emphasis} opacity in the <Text /> theme`);
  }
  return textOpacity;
};

export const getTextCommonStyle = theme => getTypography(theme).text.common;
