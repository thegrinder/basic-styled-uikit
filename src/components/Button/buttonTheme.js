import { rem } from '../../helpers/utils';
import colors from '../../theme/colors';

const buttonTheme = {
  btnTypes: {
    basic: {
      normal: {
        color: colors.gray900,
        backgroundColor: colors.transparent,
        borderColor: colors.gray200,
      },
      hover: {
        color: colors.gray900,
        backgroundColor: colors.transparent,
        borderColor: colors.gray400,
      },
      active: {
        color: colors.gray900,
        backgroundColor: colors.transparent,
        borderColor: colors.gray500,
      },
    },
    default: {
      normal: {
        color: colors.black,
        backgroundColor: colors.gray300,
        borderColor: colors.transparent,
      },
      hover: {
        color: colors.black,
        backgroundColor: colors.gray400,
        borderColor: colors.transparent,
      },
      active: {
        color: colors.black,
        backgroundColor: colors.gray500,
        borderColor: colors.transparent,
      },
    },
    primary: {
      normal: {
        color: colors.white,
        backgroundColor: colors.primary500,
        borderColor: colors.transparent,
      },
      hover: {
        color: colors.white,
        backgroundColor: colors.primary600,
        borderColor: colors.transparent,
      },
      active: {
        color: colors.white,
        backgroundColor: colors.primary700,
        borderColor: colors.transparent,
      },
    },
    danger: {
      normal: {
        color: colors.white,
        backgroundColor: colors.danger500,
        borderColor: colors.transparent,
      },
      hover: {
        color: colors.white,
        backgroundColor: colors.danger600,
        borderColor: colors.transparent,
      },
      active: {
        color: colors.white,
        backgroundColor: colors.danger700,
        borderColor: colors.transparent,
      },
    },
  },
  btnSizes: {
    small: {
      padding: `0 ${rem(15)}`,
      lineHeight: rem(28),
      fontSize: rem(14),
    },
    default: {
      padding: `0 ${rem(30)}`,
      fontSize: rem(16),
      lineHeight: rem(38),
    },
    large: {
      padding: `0 ${rem(40)}`,
      lineHeight: rem(53),
      fontSize: rem(22),
    },
  },
  common: {
    fontWeight: '700',
    letterSpacing: '.4px',
  },
};

export default buttonTheme;
