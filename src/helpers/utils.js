import { css } from 'styled-components';

const toDashCase = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const createStyles = selectedStyles => (
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

export const rem = pxValue => `${pxValue / 16}rem`;
