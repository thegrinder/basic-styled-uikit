import colors from '../../theme/colors';

const textTheme = {
  sizings: {
    l: {
      fontSize: '1.25rem',
    },
    m: {
      fontSize: '1rem',
    },
    s: {
      fontSize: '.0875rem',
    },
    xs: {
      fontSize: '.75rem',
    },
  },
  colors: {
    light: colors.gray600,
    default: colors.gray700,
    dark: colors.gray800,

    black: colors.black,
    white: colors.white,
    primary: colors.primary500,
    success: colors.success500,
    warning: colors.warning500,
    danger: colors.danger500,
  },
  common: {
    fontWeight: 400,
  },
};

export default textTheme;
