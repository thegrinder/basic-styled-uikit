import { darken, lighten } from 'polished';
import colors from '../../theme/colors';

export const linkDarkTheme = {
  linkTypes: {
    default: {
      normal: {
        color: colors.primary400,
      },
      hover: {
        color: lighten(0.1, colors.primary400),
      },
    },
    muted: {
      normal: {
        color: colors.neutral400,
      },
      hover: {
        color: lighten(0.1, colors.neutral400),
      },
    },
  },
};

export const linkBaseTheme = {
  linkTypes: {
    default: {
      normal: {
        color: colors.primary600,
      },
      hover: {
        color: darken(0.1, colors.primary600),
      },
    },
    muted: {
      normal: {
        color: colors.neutral600,
      },
      hover: {
        color: darken(0.1, colors.neutral600),
      },
    },
  },
  common: {
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};
