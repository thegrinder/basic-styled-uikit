import { css } from 'styled-components';
import { getStyle } from 'helpers/utils';

const getInputType = ({ theme, isValid }, state) => {
  const { inputTypes } = theme.uiKit.form;
  return isValid
    ? inputTypes.valid[state]
    : inputTypes.invalid;
};

export const getInputTypeStyle = state => (
  css`
    ${getStyle(getInputType, state)}
  `
);
