import { getButton } from '../../theme/themeSelectors';

export const getBtnTypeStyle = (theme, btntype, state) => {
  const typeStyle = getButton(theme).btnTypes[btntype];
  return typeStyle && typeStyle[state] ? typeStyle[state] : {};
};

export const getBtnSizingStyle = (theme, sizing) =>
  getButton(theme).sizings[sizing] || {};

export const getBtnCommonStyle = (theme) => getButton(theme).common;
