import { css } from 'styled-components';

export const getHeadingSizing = (theme, sizing) => (
  theme.uiKit.heading.sizings[sizing]
);
export const headingSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getHeadingSizing(theme, sizing)};`
);

export const getHeadingColour = (theme, colour) => (
  theme.uiKit.heading.colours[colour]
);
export const headingColourStyle = ({ theme, colour }) => (
  css`color: ${getHeadingColour(theme, colour)};`
);
