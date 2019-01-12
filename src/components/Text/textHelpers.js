import { css } from 'styled-components';
import { getStyle } from '../../helpers/utils';

const getTextSizing = ({ theme, sizing }) => theme.uiKit.text.sizings[sizing];
export const textSizingStyle = getStyle(getTextSizing);

const getTextColor = (theme, color) => theme.uiKit.text.colors[color];
export const textColorStyle = ({ theme, color }) => (
  css`color: ${getTextColor(theme, color)};`
);

const getTextCommonStyle = ({ theme }) => theme.uiKit.text.common;
export const textCommonStyle = getStyle(getTextCommonStyle);
