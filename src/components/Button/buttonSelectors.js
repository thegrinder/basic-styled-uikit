import { getButton } from '../../theme/themeSelectors';

export const getBtnTypeStyle = (theme, btntype, state) => (
  getButton(theme).btnTypes[btntype][state]
);

export const getBtnSizingStyle = (theme, sizing) => getButton(theme).sizings[sizing];

export const getBtnCommonStyle = theme => getButton(theme).common;
