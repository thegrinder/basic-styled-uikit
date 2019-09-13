import { createSelector } from '../../helpers';

export const getForm = createSelector('form');

export const getRegularInputCommonStyle = theme =>
  getForm(theme).common && getForm(theme).common.regular;

export const getRegularInputStyle = (theme, invalid, state) => {
  const { states } = getForm(theme).regular;
  return invalid ? states.invalid : states.valid[state];
};

export const getMiscInputCommonStyle = theme =>
  getForm(theme).common && getForm(theme).common.misc;

export const getMiscInputStyle = (theme, invalid, state) => {
  const { states } = getForm(theme).misc;
  return invalid && state === 'normal' ? states.invalid : states.valid[state];
};

export const getInlineInputCommonStyle = theme =>
  getForm(theme).common && getForm(theme).common.inline;

export const getInlineInputStyle = (theme, invalid, state) => {
  const { states } = getForm(theme).inline;
  return invalid ? states.invalid : states.valid[state];
};

export const getToggleStyle = (theme, state) =>
  getForm(theme).toggle.states[state];
