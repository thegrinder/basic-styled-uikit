import { darken } from 'polished';
import colors from '../../theme/colors';

const buttonTheme = {
  btnTypes: {
    default: {
      normal: {
        color: colors.neutral0,
        backgroundColor: colors.neutral600,
      },
      hover: {
        backgroundColor: darken(0.1, colors.neutral600),
      },
      active: {
        backgroundColor: darken(0.15, colors.neutral600),
      },
    },
    primary: {
      normal: {
        color: colors.neutral0,
        backgroundColor: colors.primary500,
      },
      hover: {
        backgroundColor: darken(0.1, colors.primary500),
      },
      active: {
        backgroundColor: darken(0.15, colors.primary500),
      },
    },
    danger: {
      normal: {
        color: colors.neutral0,
        backgroundColor: colors.danger500,
      },
      hover: {
        backgroundColor: darken(0.1, colors.danger500),
      },
      active: {
        backgroundColor: darken(0.15, colors.danger500),
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
