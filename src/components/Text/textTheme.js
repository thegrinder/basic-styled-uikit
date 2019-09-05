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
      primary: colors.primary500,
      success: colors.success500,
      warning: colors.warning500,
      danger: colors.danger500,
    },
    dark: {
      neutral: colors.neutral0,
      primary: colors.primary300,
      success: colors.success300,
      warning: colors.warning300,
      danger: colors.danger300,
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
