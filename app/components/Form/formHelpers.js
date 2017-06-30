import { css } from 'styled-components';
import { getStyle } from 'helpers/utils';

const getInputType = ({ theme, isValid }, state) => {
  const { inputTypes } = theme.uiKit.form;
  return isValid
    ? inputTypes.valid[state]
    : inputTypes.invalid;
};

const getInputTypeStyle = state => css`
  ${getStyle(getInputType, state)}
`;

export const inputNormalStyles = getInputTypeStyle('normal');
export const inputActiveStyles = getInputTypeStyle('active');
export const inputDisabledStyles = getInputTypeStyle('disabled');
