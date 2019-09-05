import { lighten } from 'polished';
import colors from '../../theme/colors';

const lightColorBoxTheme = {
  bgColors: {
    light: {
      neutral: colors.neutral0,
      primary: colors.primary600,
      success: colors.success600,
      warning: colors.warning600,
      danger: colors.danger600,
    },
    dark: {
      neutral: colors.neutral1000,
      primary: colors.primary400,
      success: colors.success400,
      warning: colors.warning400,
      danger: colors.danger400,
    },
  },
  elevations: {
    light: {
      1: {
        boxShadow:
          '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
      },
      2: {
        boxShadow:
          '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
      },
    },
    dark: {
      1: {
        backgroundColor: lighten(0.03, colors.neutral1000),
      },
      2: {
        backgroundColor: lighten(0.06, colors.neutral1000),
      },
    },
  },
};

export default lightColorBoxTheme;
