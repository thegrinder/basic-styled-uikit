import { css } from 'styled-components';

export const getHeadingSizing = (theme, sizing) => (
  theme.uiKit.heading.sizings[sizing]
);
export const headingSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getHeadingSizing(theme, sizing)};`
);

export const getHeadingColor = (theme, colour) => (
  theme.uiKit.heading.colours[colour]
);
export const headingColorStyle = ({ theme, colour }) => (
  css`color: ${getHeadingColor(theme, colour)};`
);
