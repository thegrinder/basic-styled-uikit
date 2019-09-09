import { createSelector } from '../../helpers';

export const getColors = createSelector('colors');

export const getColor = color => ({ theme }) => getColors(theme)[color];
