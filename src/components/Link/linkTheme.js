import { darken } from 'polished';
import colors from '../../theme/colors';

const linkTheme = {
  linkTypes: {
    default: {
      normal: {
        color: colors.primary500,
      },
      hover: {
        color: darken(0.1, colors.primary500),
      },
    },
    muted: {
      normal: {
        color: colors.gray600,
      },
      hover: {
        color: darken(0.1, colors.gray600),
      },
    },
  },
  common: {
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default linkTheme;
