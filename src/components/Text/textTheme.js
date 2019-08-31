import colors from '../../theme/colors';

const lightThemeTextColors = {
  neutral1000: colors.neutral1000,
  neutral800: colors.neutral800,
  neutral600: colors.neutral600,
  primary: colors.primary500,
  success: colors.success500,
  warning: colors.warning500,
  danger: colors.danger500,
};

// const darkThemeTextColors = {
//   neutral1000: colors.neutral0,
//   neutral800: colors.neutral500,
//   neutral600: colors.neutral600,
//   primary: colors.primary200,
//   success: colors.success200,
//   warning: colors.warning200,
//   danger: colors.danger200,
// };

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
  colors: lightThemeTextColors,
  common: {
    fontWeight: 400,
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default textTheme;
