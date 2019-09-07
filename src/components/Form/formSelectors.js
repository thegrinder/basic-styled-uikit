import { getForm, getMode } from '../../theme/themeSelectors';

export const getRegularInputCommonStyle = theme =>
  getForm(theme).regular.common;

export const getRegularInputStyle = (theme, invalid, state) => {
  const mode = getMode(theme);
  const { states } = getForm(theme).regular[mode];
  return invalid ? states.invalid : states.valid[state];
};

export const getMiscInputCommonStyle = theme => getForm(theme).misc.common;
export const getMiscInputStyle = (theme, invalid, state) => {
  const mode = getMode(theme);
  const { states } = getForm(theme).misc[mode];
  return invalid && state === 'normal' ? states.invalid : states.valid[state];
};

export const getInlineInputCommonStyle = theme => getForm(theme).inline.common;
export const getInlineInputStyle = (theme, invalid, state) => {
  const mode = getMode(theme);
  const { states } = getForm(theme).inline[mode];
  return invalid ? states.invalid : states.valid[state];
};

export const getToggleStyle = (theme, state) => {
  const mode = getMode(theme);
  return getForm(theme).toggle[mode].states[state];
};
