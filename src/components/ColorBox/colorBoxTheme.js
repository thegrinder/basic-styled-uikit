import colors from '../../theme/colors';

const colorBoxTheme = {
  bgColors: {
    white: colors.neutral0,
    lightest: colors.neutral50,
    lighter: colors.neutral100,
    light: colors.neutral200,
    normal: colors.neutral300,
    dark: colors.neutral400,
    darker: colors.neutral500,
    darkest: colors.neutral600,

    primary: colors.primary500,
    success: colors.success500,
    danger: colors.danger500,
    warning: colors.warning500,
  },
  elevations: {
    1: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    2: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
  },
};

export default colorBoxTheme;
