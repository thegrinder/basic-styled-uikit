import { css } from 'styled-components';

export const getColor = (theme, bgColor) => (
  theme.uiKit.colors[bgColor]
);
export const colorBoxBgStyle = ({ theme, bgColor }) => (
  css`background-color: ${getColor(theme, bgColor)};`
);

export const colorBoxBorderStyle = ({ theme, borderColor }) => (
  css`border-color: ${getColor(theme, borderColor)};`
);
