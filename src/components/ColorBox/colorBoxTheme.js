import colors from '../../theme/colors';

const colorBoxTheme = {
  bgColors: {
    transparent: colors.transparent,
    inherit: colors.inherit,
    white: colors.neutral0,
    lightest: colors.neutral50,
    lighter: colors.neutral100,
    light: colors.neutral200,
    normal: colors.neutral300,
    dark: colors.neutral400,
    darker: colors.neutral500,
    darkest: colors.neutral600,

    washedPrimary: colors.primary50,
    primary: colors.primary500,
    washedSuccess: colors.success50,
    success: colors.success500,
    washedDanger: colors.danger50,
    danger: colors.danger500,
    washedWarning: colors.warning50,
    warning: colors.warning500,
  },
  elevations: {
    1: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    2: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
  },
};

export default colorBoxTheme;
