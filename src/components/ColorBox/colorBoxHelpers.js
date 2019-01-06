import { css } from 'styled-components';

export const getBoxBgColor = (theme, bgColor) => (
  theme.uiKit.colorBox.bgColors[bgColor]
);
export const colorBoxBgStyle = ({ theme, bgColor }) => {
  const boxBgColor = getBoxBgColor(theme, bgColor);
  return boxBgColor
    ? css`background-color: ${getBoxBgColor(theme, bgColor)};`
    : '';
};

export const getBoxBorderColor = (theme, borderColor) => (
  theme.uiKit.colorBox.borderColors[borderColor]
);
export const colorBoxBorderStyle = ({ theme, borderColor }) => {
  const boxBorderColor = getBoxBorderColor(theme, borderColor);
  return boxBorderColor
    ? css`border-color: ${boxBorderColor};`
    : '';
};
