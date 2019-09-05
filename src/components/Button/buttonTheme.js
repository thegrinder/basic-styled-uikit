import { darken, lighten } from 'polished';
import colors from '../../theme/colors';

const buttonTheme = {
  btnTypes: {
    default: {
      light: {
        normal: {
          color: colors.neutral0,
          backgroundColor: colors.neutral600,
        },
        hover: {
          backgroundColor: lighten(0.05, colors.neutral600),
        },
        active: {
          backgroundColor: darken(0.05, colors.neutral600),
        },
      },
      dark: {
        normal: {
          color: colors.neutral1000,
          backgroundColor: colors.neutral400,
        },
        hover: {
          backgroundColor: lighten(0.05, colors.neutral400),
        },
        active: {
          backgroundColor: darken(0.05, colors.neutral400),
        },
      },
    },
    primary: {
      light: {
        normal: {
          color: colors.neutral0,
          backgroundColor: colors.primary600,
        },
        hover: {
          backgroundColor: lighten(0.05, colors.primary600),
        },
        active: {
          backgroundColor: darken(0.05, colors.primary600),
        },
      },
      dark: {
        normal: {
          color: colors.neutral1000,
          backgroundColor: colors.primary400,
        },
        hover: {
          backgroundColor: lighten(0.05, colors.primary400),
        },
        active: {
          backgroundColor: darken(0.05, colors.primary400),
        },
      },
    },
    danger: {
      light: {
        normal: {
          color: colors.neutral0,
          backgroundColor: colors.danger600,
        },
        hover: {
          backgroundColor: lighten(0.05, colors.danger600),
        },
        active: {
          backgroundColor: darken(0.05, colors.danger600),
        },
      },
      dark: {
        normal: {
          color: colors.neutral1000,
          backgroundColor: colors.danger400,
        },
        hover: {
          backgroundColor: lighten(0.05, colors.danger400),
        },
        active: {
          backgroundColor: darken(0.05, colors.danger400),
        },
      },
    },
  },
  sizings: {
    s: {
      padding: '0 1rem',
      lineHeight: '1.75rem',
      fontSize: '.875rem',
    },
    m: {
      padding: '0 1.875rem',
      fontSize: '1rem',
      lineHeight: '2.375rem',
    },
    l: {
      padding: '0 2.5rem',
      lineHeight: '3.375rem',
      fontSize: '1.375rem',
    },
  },
  common: {
    fontWeight: '700',
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default buttonTheme;
