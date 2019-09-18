import { createSelector } from '../../helpers';

export const getTypography = createSelector('typography');

export const getColor = color => ({ theme }) =>
  getTypography(theme)?.colors?.[color];

export const getBaseFontSize = theme => getTypography(theme)?.baseFontSize;

export const getBaseLineHeight = theme => getTypography(theme)?.baseLineHeight;

export const rem = pxValue => ({ theme }) => {
  const baseFontSize = getBaseFontSize(theme) || 16;
  return `${pxValue / baseFontSize}rem`;
};

export const calcLineHeight = (remValue, baseLineHeight) => {
  if (!remValue || !baseLineHeight || !remValue.includes('rem')) {
    return 1.5;
  }
  const value = Number(remValue.replace('rem', ''));
  return `${(Math.ceil(value / baseLineHeight) * baseLineHeight) / value}`;
};
