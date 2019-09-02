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
    light: {
      neutral: colors.neutral1000,
      primary: colors.primary500,
      success: colors.success500,
      warning: colors.warning500,
      danger: colors.danger500,
    },
    dark: {
      neutral: colors.neutral0,
      primary: colors.primary200,
      success: colors.success200,
      warning: colors.warning200,
      danger: colors.danger200,
    },
  },
  onBackground: {
    light: {
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
    dark: {
      primary: {
        neutral: colors.neutral1000,
      },
      success: {
        neutral: colors.neutral1000,
      },
      warning: {
        neutral: colors.neutral1000,
      },
      danger: {
        neutral: colors.neutral1000,
      },
    },
  },
  opacities: {
    high: 1,
    normal: 0.8,
    low: 0.6,
  },
  common: {
    fontWeight: 700,
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default headingTheme;
