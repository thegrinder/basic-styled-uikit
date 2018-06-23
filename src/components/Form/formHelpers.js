import { getStyle } from '../../helpers/utils';

const getRegularInput = ({ theme, invalid }, state) => {
  const { regular } = theme.uiKit.form;
  return invalid
    ? regular.invalid
    : regular.valid[state];
};
const getRegularInputStyle = state => getStyle(getRegularInput, state);

export const inputNormalStyle = getRegularInputStyle('normal');
export const inputActiveStyle = getRegularInputStyle('active');
export const inputDisabledStyle = getRegularInputStyle('disabled');


const getMiscInput = ({ theme, invalid }, state) => {
  const { misc } = theme.uiKit.form;
  return invalid
    ? misc.invalid
    : misc.valid[state];
};

const getMiscInputStyle = state => getStyle(getMiscInput, state);

export const miscNormalStyle = getMiscInputStyle('normal');
export const miscActiveStyle = getMiscInputStyle('active');
export const miscCheckedStyle = getMiscInputStyle('checked');
export const miscDisabledStyle = getMiscInputStyle('disabled');


const getInlineInput = ({ theme, invalid }, state) => {
  const { inline } = theme.uiKit.form;
  return invalid
    ? inline.invalid
    : inline.valid[state];
};

const getInlineInputStyle = state => getStyle(getInlineInput, state);

export const inlineInputNormalStyle = getInlineInputStyle('normal');
export const inlineInputHoverStyle = getInlineInputStyle('hover');
export const inlineInputActiveStyle = getInlineInputStyle('active');
export const inlineInputDisabledStyle = getInlineInputStyle('disabled');


const getToggle = ({ theme }, state) => theme.uiKit.form.toggle[state];
const getToggleStyle = state => getStyle(getToggle, state);
export const toggleNormalStyle = getToggleStyle('normal');
export const toggleCheckedStyle = getToggleStyle('checked');
