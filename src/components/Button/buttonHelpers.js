export const getBtnTypeStyle = (theme, btntype, state) => (
  theme.uiKit.button.btnTypes[btntype][state]
);

export const getBtnSizingStyle = (theme, sizing) => theme.uiKit.button.sizings[sizing];

export const getBtnCommonStyle = theme => theme.uiKit.button.common;
