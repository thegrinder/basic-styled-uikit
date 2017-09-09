import { getStyle } from '../../helpers/utils';

const getRegularInput = ({ theme, isValid }, state) => {
  const { regular } = theme.uiKit.form;
  return isValid
    ? regular.valid[state]
    : regular.invalid;
};
const getRegularInputStyle = state => getStyle(getRegularInput, state);

export const inputNormalStyle = getRegularInputStyle('normal');
export const inputActiveStyle = getRegularInputStyle('active');
export const inputDisabledStyle = getRegularInputStyle('disabled');


const getMiscInput = ({ theme, isValid }, state) => {
  const { misc } = theme.uiKit.form;
  return isValid
    ? misc.valid[state]
    : misc.invalid;
};

const getMiscInputStyle = state => getStyle(getMiscInput, state);

export const miscNormalStyle = getMiscInputStyle('normal');
export const miscActiveStyle = getMiscInputStyle('active');
export const miscCheckedStyle = getMiscInputStyle('checked');
export const miscDisabledStyle = getMiscInputStyle('disabled');
