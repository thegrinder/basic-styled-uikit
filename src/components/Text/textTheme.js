import { rem } from '../../helpers/utils';
import colors from '../../theme/colors';

const textTheme = {
  sizings: {
    l: {
      fontSize: rem(20),
    },
    m: {
      fontSize: rem(16),
    },
    s: {
      fontSize: rem(14),
    },
    xs: {
      fontSize: rem(12),
    },
  },
  colors: {
    light: colors.gray600,
    default: colors.gray700,
    dark: colors.gray800,

    black: colors.black,
    white: colors.white,
    primary: colors.primary500,
    success: colors.success500,
    warning: colors.warning500,
    danger: colors.danger500,
  },
  common: {
    fontWeight: 400,
  },
};

export default textTheme;
