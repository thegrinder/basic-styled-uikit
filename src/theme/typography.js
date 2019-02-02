export const getBaseFontSize = theme => theme.uiKit.typography.baseFontSize;

export const getBaseLineHeight = theme => theme.uiKit.typography.baseLineHeight;

export const calcLineHeight = (remValue, baseLineHeight) => {
  const value = Number(remValue.replace('rem', ''));
  return `${(Math.ceil(value / baseLineHeight) * baseLineHeight) / value}`;
};

const typography = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
};

export default typography;
