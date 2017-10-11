import { getStyle } from '../../helpers/utils';

const getColorBoxBg = ({ theme, bgColor }) => theme.uiKit.colorBox.bgColors[bgColor];
export const colorBoxBgStyle = getStyle(getColorBoxBg);

const getColorBoxBorder = ({ theme, borderColor }) => (
  theme.uiKit.colorBox.borderColors[borderColor]
);
export const colorBoxBorderStyle = getStyle(getColorBoxBorder);
