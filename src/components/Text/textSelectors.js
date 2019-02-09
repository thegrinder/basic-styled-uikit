import { getText } from '../../theme/themeSelectors';

export const getTextSizingStyle = (theme, sizing) => getText(theme).sizings[sizing];

export const getTextColor = (theme, color) => getText(theme).colors[color];

export const getTextCommonStyle = theme => getText(theme).common;
