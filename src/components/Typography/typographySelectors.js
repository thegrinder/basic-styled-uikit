import { createSelector } from '../../helpers';

export const getTypography = createSelector('typography');

export const getColor = ({ theme }) => color => {
  const fontColor = getTypography(theme).colors;
  if (!fontColor) {
    throw new Error(`There is no ${color} color in the typography theme`);
  }
  return fontColor;
};

export const getBaseFontSize = theme => getTypography(theme).baseFontSize;

export const getBaseLineHeight = theme => getTypography(theme).baseLineHeight;

export const rem = pxValue => ({ theme }) =>
  `${pxValue / getBaseFontSize(theme)}rem`;

export const calcLineHeight = (remValue, baseLineHeight) => {
  if (!remValue.includes('rem')) {
    throw new Error(
      '<Text /> and <Heading /> sizings have to be set in rem units'
    );
  }
  const value = Number(remValue.replace('rem', ''));
  return `${(Math.ceil(value / baseLineHeight) * baseLineHeight) / value}`;
};
