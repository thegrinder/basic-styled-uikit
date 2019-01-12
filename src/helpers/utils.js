import { css } from 'styled-components';
import { getBaseFontSize } from '../theme/typography';

const toDashCase = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const createStyles = selectedStyles => (
  css`${
    Object.keys(selectedStyles)
      .reduce((prev, next) => (
        `${prev}${toDashCase(next)}: ${selectedStyles[next]};`
      ), '')
  }`
);

export const getStyle = (selector, state) => (props) => {
  const selectedStyles = state ? selector(props, state) : selector(props);
  return createStyles(selectedStyles);
};

export const rem = pxValue => props => `${pxValue / getBaseFontSize(props)}rem`;

export const calcLineHeight = (remValue, baseLineHeight) => {
  const value = Number(remValue.replace('rem', ''));
  return `${(Math.ceil(value / baseLineHeight) * baseLineHeight) / value}`;
};
