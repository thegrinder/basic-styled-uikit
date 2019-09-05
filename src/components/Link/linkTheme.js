import { darken, lighten } from 'polished';
import colors from '../../theme/colors';

const linkTheme = {
  linkTypes: {
    default: {
      light: {
        normal: {
          color: colors.primary500,
        },
        hover: {
          color: darken(0.1, colors.primary500),
        },
      },
      dark: {
        normal: {
          color: colors.primary300,
        },
        hover: {
          color: lighten(0.1, colors.primary300),
        },
      },
    },
    muted: {
      light: {
        normal: {
          color: colors.neutral600,
        },
        hover: {
          color: darken(0.1, colors.neutral600),
        },
      },
      dark: {
        normal: {
          color: colors.neutral400,
        },
        hover: {
          color: lighten(0.1, colors.neutral400),
        },
      },
    },
  },
  common: {
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default linkTheme;
