import { css } from 'styled-components';

const getInputTypes = props => props.theme.uiKit.form.inputTypes;
const getInputType = (props, formState) => (
  props.isValid
    ? getInputTypes(props).valid[formState]
    : getInputTypes(props).invalid
);

export const getInputTypeStyle = formState => (
  css`
    border-color: ${props => getInputType(props, formState).borderColor};
    color: ${props => getInputType(props, formState).color};
  `
);
