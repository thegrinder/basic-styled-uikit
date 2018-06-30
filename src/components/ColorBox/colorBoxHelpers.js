import { css } from 'styled-components';

export const getBoxBgColor = (theme, bgColor) => (
  theme.uiKit.colorBox.bgColors[bgColor]
);
export const colorBoxBgStyle = ({ theme, bgColor }) => (
  css`background-color: ${getBoxBgColor(theme, bgColor)};`
);

export const getBoxBorderColor = (theme, borderColor) => (
  theme.uiKit.colorBox.borderColors[borderColor]
);
export const colorBoxBorderStyle = ({ theme, borderColor }) => (
  css`border-color: ${getBoxBorderColor(theme, borderColor)};`
);
