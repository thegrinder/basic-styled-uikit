import { getButton, getMode } from '../../theme/themeSelectors';

export const getBtnTypeStyle = (theme, btntype, state) => {
  const mode = getMode(theme);
  const typeStyle = getButton(theme).btnTypes[btntype][mode];
  if (!typeStyle) {
    throw new Error(
      `There is no ${btntype} button type in the <Button /> theme`
    );
  }
  return typeStyle[state];
};

export const getBtnSizingStyle = (theme, sizing) =>
  getButton(theme).sizings[sizing] || {};

export const getBtnCommonStyle = theme => getButton(theme).common;
