export const getTextSizingStyle = (theme, sizing) => (
  theme.uiKit.text.sizings[sizing]
);

export const getTextColor = (theme, color) => theme.uiKit.text.colors[color];

export const getTextCommonStyle = theme => theme.uiKit.text.common;
