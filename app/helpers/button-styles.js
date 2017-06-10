import { css } from 'styled-components';

const getBtnState = (props, buttonState) => props.theme.uiKit.buttons[props.kind][buttonState];

export const getBtnStateStyle = buttonState => (
  css`
    color: ${props => getBtnState(props, buttonState).color};
    background-color: ${props => getBtnState(props, buttonState).bgColor};
    border-color: ${props => getBtnState(props, buttonState).borderColor};
  `
);
