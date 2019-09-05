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
  opacities: {
    high: 1,
    normal: 0.8,
    low: 0.6,
  },
  colors: {
    light: {
      neutral: colors.neutral1000,
      primary: colors.primary600,
      success: colors.success600,
      warning: colors.warning600,
      danger: colors.danger600,
    },
    dark: {
      neutral: colors.neutral0,
      primary: colors.primary400,
      success: colors.success400,
      warning: colors.warning400,
      danger: colors.danger400,
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
};

export default textTheme;
