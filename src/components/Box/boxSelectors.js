import { createSelector } from '../../helpers';

export const getBox = createSelector('box');

export const getBoxBgColor = (theme, bgColor) =>
  getBox(theme)?.bgColors?.[bgColor];

export const getBackgroundColor = bgColor => ({ theme }) =>
  getBoxBgColor(theme, bgColor);

export const getBoxElevation = (theme, elevation) =>
  getBox(theme)?.elevations?.[elevation];
