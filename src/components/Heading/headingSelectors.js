import { getHeading, getMode } from '../../theme/themeSelectors';

export const getHeadingSizingStyle = (theme, sizing) => {
  const sizingStyle = getHeading(theme).sizings[sizing];
  if (!sizingStyle) {
    throw new Error(`There is no ${sizing} size in the <Heading /> theme`);
  }
  return sizingStyle;
};

export const getHeadingColor = (theme, color) => {
  const mode = getMode(theme);
  const headingColor = getHeading(theme).colors[mode][color];
  if (!headingColor) {
    throw new Error(
      `There is no ${headingColor} color in the <Heading /> theme`
    );
  }
  return headingColor;
};

export const getHeadingColorOnBg = (theme, bgColor, color) => {
  const mode = getMode(theme);
  const bgColors = getHeading(theme).onBackground[mode][bgColor];
  if (bgColors && bgColors[color]) {
    return bgColors[color];
  }
  return getHeadingColor(theme, color);
};

export const getHeadingOpacity = (theme, emphasis) => {
  const headingOpacity = getHeading(theme).opacities[emphasis];
  if (!headingOpacity) {
    throw new Error(`There is no ${emphasis} opacity in the <Heading /> theme`);
  }
  return headingOpacity;
};

export const getHeadingCommonStyle = theme => getHeading(theme).common;
