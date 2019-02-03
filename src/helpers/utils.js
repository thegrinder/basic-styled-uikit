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

export const rem = (theme, pxValue) => `${pxValue / getBaseFontSize(theme)}rem`;
