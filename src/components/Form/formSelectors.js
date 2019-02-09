export const getRegularInputCommonStyle = theme => theme.uiKit.form.regular.common;
export const getRegularInputStyle = (theme, invalid, state) => {
  const { states } = theme.uiKit.form.regular;
  return invalid
    ? states.invalid
    : states.valid[state];
};

export const getMiscInputCommonStyle = theme => theme.uiKit.form.misc.common;
export const getMiscInputStyle = (theme, invalid, state) => {
  const { states } = theme.uiKit.form.misc;
  return invalid && state === 'normal'
    ? states.invalid
    : states.valid[state];
};

export const getInlineInputCommonStyle = theme => theme.uiKit.form.inline.common;
export const getInlineInputStyle = (theme, invalid, state) => {
  const { states } = theme.uiKit.form.inline;
  return invalid
    ? states.invalid
    : states.valid[state];
};

export const getToggleStyle = (theme, state) => theme.uiKit.form.toggle.states[state];
