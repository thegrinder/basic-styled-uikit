import { getTypography } from '../typographySelectors';

export const getTextSizingStyle = (theme, sizing) =>
  getTypography(theme)?.text?.sizings?.[sizing];

export const getTextColor = (theme, color) => {
  const textColor = getTypography(theme)?.text?.colors?.[color];
  const baseColor = getTypography(theme)?.colors?.[color];
  return textColor || baseColor;
};

export const getTextColorOnBg = (theme, bgColor, color) => {
  const typography = getTypography(theme);

  const textColorOnBg = typography?.text?.onBackground?.[bgColor]?.[color];

  const baseColorOnBg = typography?.onBackground?.[bgColor]?.[color];

  return textColorOnBg || baseColorOnBg || getTextColor(theme, color);
};

export const getTextOpacity = (theme, emphasis) =>
  getTypography(theme)?.opacities?.[emphasis];

export const getTextCommonStyle = theme => getTypography(theme)?.text?.common;
