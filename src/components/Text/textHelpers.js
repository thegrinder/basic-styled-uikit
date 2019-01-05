import { css } from 'styled-components';
import { getColor } from '../../theme/colors';

export const getTextSizing = (theme, sizing) => (
  theme.uiKit.text.sizings[sizing]
);
export const textSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getTextSizing(theme, sizing)};`
);

export const textColorStyle = ({ theme, colour }) => (
  css`color: ${getColor(theme, colour)};`
);
