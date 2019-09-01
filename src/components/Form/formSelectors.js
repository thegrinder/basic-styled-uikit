import { getForm } from '../../theme/themeSelectors';

export const getRegularInputCommonStyle = theme =>
  getForm(theme).regular.common;
export const getRegularInputStyle = (theme, invalid, state) => {
  const { states } = getForm(theme).regular;
  return invalid ? states.invalid : states.valid[state];
};

export const getMiscInputCommonStyle = theme => getForm(theme).misc.common;
export const getMiscInputStyle = (theme, invalid, state) => {
  const { states } = getForm(theme).misc;
  return invalid && state === 'normal' ? states.invalid : states.valid[state];
};

export const getInlineInputCommonStyle = theme => getForm(theme).inline.common;
export const getInlineInputStyle = (theme, invalid, state) => {
  const { states } = getForm(theme).inline;
  return invalid ? states.invalid : states.valid[state];
};

export const getToggleStyle = (theme, state) =>
  getForm(theme).toggle.states[state];
