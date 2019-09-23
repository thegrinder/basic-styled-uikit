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

export const calcLineHeight = fontSize => ({ theme }) => {
  const baseLineHeight = getBaseLineHeight(theme);

  if (!fontSize || !baseLineHeight) {
    return 1.5;
  }

  const remValue = fontSize.includes('rem')
    ? fontSize
    : rem(Number(fontSize.replace('px', '')))({ theme });
  const num = Number(remValue.replace('rem', ''));

  return `${(Math.ceil(num / baseLineHeight) * baseLineHeight) / num}`;
};
