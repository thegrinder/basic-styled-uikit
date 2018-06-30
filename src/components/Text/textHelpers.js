import { css } from 'styled-components';

export const getTextSizing = (theme, sizing) => (
  theme.uiKit.text.sizings[sizing]
);
export const textSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getTextSizing(theme, sizing)};`
);

export const getTextColour = (theme, colour) => (
  theme.uiKit.text.colours[colour]
);
export const textColourStyle = ({ theme, colour }) => (
  css`color: ${getTextColour(theme, colour)};`
);
