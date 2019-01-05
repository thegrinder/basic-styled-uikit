import { css } from 'styled-components';
import { getColor } from '../../theme/colors';

export const getHeadingSizing = (theme, sizing) => (
  theme.uiKit.heading.sizings[sizing]
);
export const headingSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getHeadingSizing(theme, sizing)};`
);

export const headingColorStyle = ({ theme, colour }) => (
  css`color: ${getColor(theme, colour)};`
);
