import { getStyle } from '../../helpers/utils';

const getRegularInputCommonStyle = ({ theme }) => theme.uiKit.form.regular.common;
const getRegularInput = ({ theme, invalid }, state) => {
  const { states } = theme.uiKit.form.regular;
  return invalid
    ? states.invalid
    : states.valid[state];
};
const getRegularInputStyle = state => getStyle(getRegularInput, state);

export const inputNormalStyle = getRegularInputStyle('normal');
export const inputActiveStyle = getRegularInputStyle('active');
export const inputDisabledStyle = getRegularInputStyle('disabled');
export const inputCommonStyle = getStyle(getRegularInputCommonStyle);


const getMiscInputCommonStyle = ({ theme }) => theme.uiKit.form.misc.common;
const getMiscInput = ({ theme, invalid }, state) => {
  const { states } = theme.uiKit.form.misc;
  return invalid
    ? states.invalid
    : states.valid[state];
};

const getMiscInputStyle = state => getStyle(getMiscInput, state);

export const miscNormalStyle = getMiscInputStyle('normal');
export const miscActiveStyle = getMiscInputStyle('active');
export const miscCheckedStyle = getMiscInputStyle('checked');
export const miscCommonStyle = getStyle(getMiscInputCommonStyle);


const getInlineInputCommonStyle = ({ theme }) => theme.uiKit.form.inline.common;
const getInlineInput = ({ theme, invalid }, state) => {
  const { states } = theme.uiKit.form.inline;
  return invalid
    ? states.invalid
    : states.valid[state];
};

const getInlineInputStyle = state => getStyle(getInlineInput, state);

export const inlineInputNormalStyle = getInlineInputStyle('normal');
export const inlineInputHoverStyle = getInlineInputStyle('hover');
export const inlineInputActiveStyle = getInlineInputStyle('active');
export const inlineInputDisabledStyle = getInlineInputStyle('disabled');
export const inlineInputCommonStyle = getStyle(getInlineInputCommonStyle);


const getToggle = ({ theme }, state) => theme.uiKit.form.toggle.states[state];
const getToggleStyle = state => getStyle(getToggle, state);
export const toggleNormalStyle = getToggleStyle('normal');
export const toggleCheckedStyle = getToggleStyle('checked');
