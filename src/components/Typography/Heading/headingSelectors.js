import { getTypography } from '../../../theme/themeSelectors';

export const getHeadingSizingStyle = (theme, sizing) => {
  const sizingStyle = getTypography(theme).heading.sizings[sizing];
  if (!sizingStyle) {
    throw new Error(`There is no ${sizing} size in the <Heading /> theme`);
  }
  return sizingStyle;
};

export const getHeadingColor = (theme, color) => {
  let headingColor;

  const baseColors = getTypography(theme).colors;
  if (baseColors && baseColors[color]) {
    headingColor = baseColors[color];
  }

  const headingColors = getTypography(theme).heading.colors;
  if (headingColors && headingColors[color]) {
    headingColor = headingColors[color];
  }

  if (!headingColor) {
    throw new Error(`There is no ${color} color in the <Heading /> theme`);
  }
  return headingColor;
};

export const getHeadingColorOnBg = (theme, bgColor, color) => {
  let headingColor;

  const baseColors = getTypography(theme).colors;
  if (baseColors && baseColors[color]) {
    headingColor = baseColors[color];
  }

  const baseBgColors = getTypography(theme).onBackground;
  if (baseBgColors && baseBgColors[bgColor] && baseBgColors[bgColor][color]) {
    headingColor = baseBgColors[bgColor][color];
  }

  const headingTheme = getTypography(theme).heading;
  if (
    headingTheme &&
    headingTheme.onBackground &&
    headingTheme.onBackground[bgColor] &&
    headingTheme.onBackground[bgColor][color]
  ) {
    headingColor = headingTheme.onBackground[bgColor][color];
  }

  if (!headingColor) {
    throw new Error(
      `There is no ${color} color set for ${bgColor} background color in typography theme`
    );
  }

  return headingColor;
};

export const getHeadingOpacity = (theme, emphasis) => {
  const textOpacity = getTypography(theme).opacities[emphasis];
  if (!textOpacity) {
    throw new Error(`There is no ${emphasis} opacity in the <Heading /> theme`);
  }
  return textOpacity;
};

export const getHeadingCommonStyle = theme =>
  getTypography(theme).heading.common;
