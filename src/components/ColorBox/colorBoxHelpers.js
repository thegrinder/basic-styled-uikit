import { css } from 'styled-components';

export const getBgColor = (theme, bgColor) => (
  theme.uiKit.colorBox.bgColors[bgColor]
);
export const colorBoxBgStyle = ({ theme, bgColor }) => (
  css`background-color: ${getBgColor(theme, bgColor)};`
);

export const getBorderColor = (theme, borderColor) => (
  theme.uiKit.colorBox.borderColors[borderColor]
);
export const colorBoxBorderStyle = ({ theme, borderColor }) => (
  css`border-color: ${getBorderColor(theme, borderColor)};`
);
