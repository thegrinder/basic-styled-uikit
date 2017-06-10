import { css } from 'styled-components';

const getBtnTypes = props => props.theme.uiKit.buttons.btnTypes;
const getBtnType = (props, buttonState) => getBtnTypes(props)[props.btnType][buttonState];

export const getBtnTypeStyle = buttonState => (
  css`
    color: ${props => getBtnType(props, buttonState).color};
    background-color: ${props => getBtnType(props, buttonState).bgColor};
    border-color: ${props => getBtnType(props, buttonState).borderColor};
  `
);

const getBtnSizes = props => props.theme.uiKit.buttons.btnSizes;
const getBtnSize = (props, buttonSize) => getBtnSizes(props)[props.btnSize];

export const getBtnSizeStyle = css`
  padding: ${props => getBtnSize(props).padding};
  line-height: ${props => getBtnSize(props).lineHeight};
  font-size: ${props => getBtnSize(props).fontSize};;
`;
