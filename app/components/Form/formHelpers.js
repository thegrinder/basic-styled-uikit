import { css } from 'styled-components';
import { getStyle } from 'helpers/utils';

const getRegularInput = ({ theme, isValid }, state) => {
  const { regular } = theme.uiKit.form;
  return isValid
    ? regular.valid[state]
    : regular.invalid;
};

const getInputTypeStyle = state => css`
  ${getStyle(getRegularInput, state)}
`;

const getMisc = ({ theme }, state) => theme.uiKit.form.misc[state];
const getMiscStyle = state => css`
  ${getStyle(getMisc, state)}
`;

export const inputNormalStyles = getInputTypeStyle('normal');
export const inputActiveStyles = getInputTypeStyle('active');
export const inputDisabledStyles = getInputTypeStyle('disabled');

export const miscNormalStyles = getMiscStyle('normal');
export const miscActiveStyles = getMiscStyle('active');
export const miscCheckedStyles = getMiscStyle('checked');
export const miscDisabledStyles = getMiscStyle('disabled');
