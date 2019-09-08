import { createSelector } from '../../helpers';

export const getButton = createSelector('button');

export const getBtnTypeStyle = (theme, btntype, state) => {
  const typeStyle = getButton(theme).btnTypes[btntype];
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
