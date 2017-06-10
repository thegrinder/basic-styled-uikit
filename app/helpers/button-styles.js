import { css } from 'styled-components';

const getBtnState = (props, type, buttonState) => props.theme.uiKit.buttons[type][buttonState];

export const getBtnStateStyle = (type, buttonState) => (
  css`
    color: ${props => getBtnState(props, type, buttonState).color}
    background-color: ${props => getBtnState(props, type, buttonState).bgColor};
    border-color: ${props => getBtnState(props, type, buttonState).borderColor};
  `
);
