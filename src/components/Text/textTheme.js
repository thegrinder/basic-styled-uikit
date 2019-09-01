import colors from '../../theme/colors';

// const darkThemeTextColors = {
//   neutral: colors.neutral0,
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
  opacities: {
    high: 1,
    normal: 0.8,
    low: 0.6,
  },
  colors: {
    neutral: colors.neutral1000,
    primary: colors.primary500,
    success: colors.success500,
    warning: colors.warning500,
    danger: colors.danger500,
  },
  onBackground: {
    primary: {
      neutral: colors.neutral0,
    },
    success: {
      neutral: colors.neutral0,
    },
    warning: {
      neutral: colors.neutral0,
    },
    danger: {
      neutral: colors.neutral0,
    },
  },
  common: {
    fontWeight: 400,
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default textTheme;
