import { getTypography } from '../../theme/themeSelectors';

export const getBaseFontSize = theme => getTypography(theme).baseFontSize;

export const getBaseLineHeight = theme => getTypography(theme).baseLineHeight;

export const rem = pxValue => ({ theme }) =>
  `${pxValue / getBaseFontSize(theme)}rem`;

export const calcLineHeight = (remValue, baseLineHeight) => {
  const value = Number(remValue.replace('rem', ''));
  return `${(Math.ceil(value / baseLineHeight) * baseLineHeight) / value}`;
};
