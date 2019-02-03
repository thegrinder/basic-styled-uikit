import { getStyle } from '../../helpers/utils';

const getBtnType = ({ theme, btntype }, state) => theme.uiKit.button.btnTypes[btntype][state];
const getBtnTypeStyle = state => getStyle(getBtnType, state);
export const btnNormalStyle = getBtnTypeStyle('normal');
export const btnHoverStyle = getBtnTypeStyle('hover');
export const btnActiveStyle = getBtnTypeStyle('active');

const getBtnSizing = ({ theme, sizing }) => theme.uiKit.button.sizings[sizing];
export const btnSizingStyle = getStyle(getBtnSizing);

const getBtnCommonStyle = ({ theme }) => theme.uiKit.button.common;
export const btnCommonStyle = getStyle(getBtnCommonStyle);
