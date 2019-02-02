import colors from '../../theme/colors';

const colorBoxTheme = {
  bgColors: {
    transparent: colors.transparent,
    inherit: colors.inherit,
    white: colors.white,
    lightest: colors.gray50,
    lighter: colors.gray100,
    light: colors.gray200,
    normal: colors.gray300,
    dark: colors.gray400,
    darker: colors.gray500,
    darkest: colors.gray600,

    washedPrimary: colors.primary50,
    primary: colors.primary500,
    washedSuccess: colors.success50,
    success: colors.success500,
    washedDanger: colors.danger50,
    danger: colors.danger500,
    washedWarning: colors.warning50,
    warning: colors.warning500,
  },
  borderColors: {
    transparent: colors.transparent,
    white: colors.white,
    light: colors.gray100,
    normal: colors.gray200,
    dark: colors.gray300,
    primary: colors.primary100,
    success: colors.success100,
    warning: colors.warning100,
    danger: colors.danger100,
  },
};

export const getBoxBgColor = (theme, bgColor) => (
  theme.uiKit.colorBox.bgColors[bgColor]
);

export const getBoxBorderColor = (theme, borderColor) => (
  theme.uiKit.colorBox.borderColors[borderColor]
);

export default colorBoxTheme;
