export const getHeadingSizingStyle = (theme, sizing) => (
  theme.uiKit.heading.sizings[sizing]
);

export const getHeadingColor = (theme, color) => theme.uiKit.heading.colors[color];

export const getHeadingCommonStyle = theme => theme.uiKit.heading.common;
