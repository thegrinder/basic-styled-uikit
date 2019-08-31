import colors from '../../theme/colors';

const headingTheme = {
  sizings: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  colors: {
    white: colors.neutral0,
    light: colors.neutral700,
    default: colors.neutral800,
    dark: colors.neutral900,
    black: colors.black,

    primary: colors.primary500,
    success: colors.success500,
    warning: colors.warning500,
    danger: colors.danger500,
  },
  common: {
    fontWeight: 700,
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default headingTheme;
