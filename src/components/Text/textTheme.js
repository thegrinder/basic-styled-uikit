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
      fontSize: '.875rem',
    },
    xs: {
      fontSize: '.75rem',
    },
  },
  colors: {
    white: colors.white,
    light: colors.gray600,
    default: colors.gray700,
    dark: colors.gray800,
    black: colors.black,

    primary: colors.primary500,
    success: colors.success500,
    warning: colors.warning500,
    danger: colors.danger500,
  },
  common: {
    fontWeight: 400,
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default textTheme;
