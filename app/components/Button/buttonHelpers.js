import { css } from 'styled-components';
import { getStyle } from 'helpers/utils';

const getBtnTypeStyle = ({ theme, btnType }, state) => theme.uiKit.button.btnTypes[btnType][state];

export const getBtnTypeStyles = state => (
  css`
    ${getStyle(getBtnTypeStyle, state)};
  `
);

const getBtnSizeStyle = ({ theme, btnSize }) => theme.uiKit.button.btnSizes[btnSize];

export const getBtnSizeStyles = css`
  ${getStyle(getBtnSizeStyle)};
`;
