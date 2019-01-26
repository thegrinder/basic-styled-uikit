import { getStyle } from '../../helpers/utils';

const getBtnType = ({ theme, btntype }, state) => theme.uiKit.button.btnTypes[btntype][state];
const getBtnTypeStyle = state => getStyle(getBtnType, state);
export const btnNormalStyle = getBtnTypeStyle('normal');
export const btnHoverStyle = getBtnTypeStyle('hover');
export const btnActiveStyle = getBtnTypeStyle('active');

const getBtnSize = ({ theme, btnsize }) => theme.uiKit.button.btnSizes[btnsize];
export const btnSizeStyle = getStyle(getBtnSize);

const getBtnCommonStyle = ({ theme }) => theme.uiKit.button.common;
export const btnCommonStyle = getStyle(getBtnCommonStyle);
