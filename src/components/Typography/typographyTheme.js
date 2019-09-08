import colors from '../../theme/colors';

export const typographyDarkTheme = {
  colors: {
    neutral: colors.neutral0,
    primary: colors.primary400,
    success: colors.success400,
    warning: colors.warning400,
    danger: colors.danger400,
  },
  onBackground: {
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
};

export const typographyBaseTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
  opacities: {
    high: 1,
    normal: 0.8,
    low: 0.6,
  },
  colors: {
    neutral: colors.neutral1000,
    primary: colors.primary600,
    success: colors.success600,
    warning: colors.warning600,
    danger: colors.danger600,
  },
  onBackground: {
    primary: {
      neutral: colors.neutral0,
    },
    success: {
      neutral: colors.neutral0,
    },
    warning: {
      neutral: colors.neutral1000,
    },
    danger: {
      neutral: colors.neutral0,
    },
  },
  text: {
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
  },
  heading: {
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
  },
};
