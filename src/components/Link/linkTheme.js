import colors from '../../theme/colors';

const linkTheme = {
  linkTypes: {
    default: {
      normal: {
        color: colors.primary500,
      },
      hover: {
        color: colors.primary600,
      },
    },
    muted: {
      normal: {
        color: colors.gray600,
      },
      hover: {
        color: colors.gray700,
      },
    },
  },
  common: {
    fontWeight: 700,
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export default linkTheme;
