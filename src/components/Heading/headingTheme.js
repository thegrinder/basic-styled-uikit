import { rem } from '../../helpers/utils';
import colors from '../../theme/colors';

const headingTheme = {
  sizings: {
    h1: {
      fontSize: rem(48),
    },
    h2: {
      fontSize: rem(40),
    },
    h3: {
      fontSize: rem(32),
    },
    h4: {
      fontSize: rem(24),
    },
    h5: {
      fontSize: rem(20),
    },
    h6: {
      fontSize: rem(16),
    },
  },
  colors: {
    light: colors.gray700,
    default: colors.gray800,
    dark: colors.gray900,

    black: colors.black,
    white: colors.white,
    primary: colors.primary500,
    success: colors.success500,
    warning: colors.warning500,
    danger: colors.danger500,
  },
  common: {
    fontWeight: 700,
  },
};

export default headingTheme;
