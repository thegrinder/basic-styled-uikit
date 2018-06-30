import { css } from 'styled-components';

export const getTextSizing = (theme, sizing) => (
  theme.uiKit.text.sizings[sizing]
);
export const textSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getTextSizing(theme, sizing)};`
);

export const getTextColor = (theme, colour) => (
  theme.uiKit.text.colours[colour]
);
export const textColorStyle = ({ theme, colour }) => (
  css`color: ${getTextColor(theme, colour)};`
);
