import { createSelector } from '../../helpers';

export const getButton = createSelector('button');

export const getBtnTypeStyle = (theme, btntype, state) =>
  getButton(theme)?.btnTypes?.[btntype]?.[state];

export const getBtnSizingStyle = (theme, sizing) =>
  getButton(theme)?.sizings?.[sizing];

export const getBtnCommonStyle = theme => getButton(theme)?.common;
