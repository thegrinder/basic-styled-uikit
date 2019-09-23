import { getTypography } from '../typographySelectors';

export const getHeadingSizingStyle = (theme, sizing) =>
  getTypography(theme)?.heading?.sizings?.[sizing];

export const getHeadingColor = (theme, color) => {
  const headingColor = getTypography(theme)?.heading?.colors?.[color];
  const baseColor = getTypography(theme)?.colors?.[color];
  return headingColor || baseColor;
};

export const getHeadingColorOnBg = (theme, bgColor, color) => {
  const typography = getTypography(theme);

  const headingColorOnBg =
    typography?.heading?.onBackground?.[bgColor]?.[color];

  const baseColorOnBg = typography?.onBackground?.[bgColor]?.[color];

  return headingColorOnBg || baseColorOnBg || getHeadingColor(theme, color);
};

export const getHeadingOpacity = (theme, emphasis) =>
  getTypography(theme)?.opacities?.[emphasis];

export const getHeadingCommonStyle = theme =>
  getTypography(theme)?.heading?.common;
