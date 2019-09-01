import { getHeading } from '../../theme/themeSelectors';

export const getHeadingSizingStyle = (theme, sizing) => getHeading(theme).sizings[sizing] || {};

export const getHeadingColor = (theme, color) => getHeading(theme).colors[color];

export const getHeadingOpacity = (theme, emphasis) => getHeading(theme).opacities[emphasis];

export const getHeadingCommonStyle = theme => getHeading(theme).common;
