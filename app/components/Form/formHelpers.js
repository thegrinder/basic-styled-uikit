import { css } from 'styled-components';
import { getStyle } from 'helpers/utils';

const getRegularInput = ({ theme, isValid }, state) => {
  const { regular } = theme.uiKit.form;
  return isValid
    ? regular.valid[state]
    : regular.invalid;
};

const getMiscInput = ({ theme, isValid }, state) => {
  const { misc } = theme.uiKit.form;
  return isValid
    ? misc.valid[state]
    : misc.invalid;
};

const getRegularInputStyle = state => css`
  ${getStyle(getRegularInput, state)}
`;

const getMiscInputStyle = state => css`
  ${getStyle(getMiscInput, state)}
`;

export const inputNormalStyles = getRegularInputStyle('normal');
export const inputActiveStyles = getRegularInputStyle('active');
export const inputDisabledStyles = getRegularInputStyle('disabled');

export const miscNormalStyles = getMiscInputStyle('normal');
export const miscActiveStyles = getMiscInputStyle('active');
export const miscCheckedStyles = getMiscInputStyle('checked');
export const miscDisabledStyles = getMiscInputStyle('disabled');
