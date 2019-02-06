import { getBaseFontSize } from '../theme/typography';

export const rem = pxValue => ({ theme }) => `${pxValue / getBaseFontSize(theme)}rem`;

export const calcLineHeight = (remValue, baseLineHeight) => {
  const value = Number(remValue.replace('rem', ''));
  return `${(Math.ceil(value / baseLineHeight) * baseLineHeight) / value}`;
};
