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
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  },
};

export const getLinkTypeStyle = (theme, linktype, state) => (
  theme.uiKit.link.linkTypes[linktype][state]
);

export const getLinkCommonStyle = theme => theme.uiKit.link.common;

export default linkTheme;
