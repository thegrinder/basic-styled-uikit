import { getStyle } from '../../helpers/utils';

const getBtnType = ({ theme, btnType }, state) => theme.uiKit.button.btnTypes[btnType][state];
const getBtnTypeStyle = state => getStyle(getBtnType, state);
export const btnNormalStyle = getBtnTypeStyle('normal');
export const btnHoverStyle = getBtnTypeStyle('hover');
export const btnActiveStyle = getBtnTypeStyle('active');

const getBtnSize = ({ theme, btnSize }) => theme.uiKit.button.btnSizes[btnSize];
export const btnSizeStyle = getStyle(getBtnSize);
