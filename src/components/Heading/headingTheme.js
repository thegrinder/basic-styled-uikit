import colors from '../../theme/colors';

const lightThemeHeadingColors = {
  neutral1000: colors.neutral1000,
  neutral800: colors.neutral800,
  neutral600: colors.neutral600,
  primary: colors.primary500,
  success: colors.success500,
  warning: colors.warning500,
  danger: colors.danger500,
};

// const darkThemeHeadingColors = {
//   neutral1000: colors.neutral0,
//   neutral800: colors.neutral500,
//   neutral600: colors.neutral600,
//   primary: colors.primary200,
//   success: colors.success200,
//   warning: colors.warning200,
//   danger: colors.danger200,
// };

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
  opacities: {
    high: 1,
    normal: 0.8,
    low: 0.6,
  },
  colors: lightThemeHeadingColors,
  common: {
    fontWeight: 700,
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default headingTheme;
