import { css } from 'styled-components';
import { getStyle } from '../../helpers/utils';

const getHeadingSizing = ({ theme, sizing }) => theme.uiKit.heading.sizings[sizing];
export const headingSizingStyle = getStyle(getHeadingSizing);

const getHeadingColor = (theme, color) => theme.uiKit.heading.colors[color];
export const headingColorStyle = ({ theme, color }) => (
  css`color: ${getHeadingColor(theme, color)};`
);

const getHeadingCommonStyle = ({ theme }) => theme.uiKit.heading.common;
export const headingCommonStyle = getStyle(getHeadingCommonStyle);
