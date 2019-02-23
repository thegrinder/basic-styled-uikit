import colors from '../../theme/colors/colorsTheme';

const buttonTheme = {
  btnTypes: {
    basic: {
      normal: {
        color: colors.gray900,
        backgroundColor: colors.transparent,
        borderColor: colors.gray300,
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
        backgroundColor: colors.gray400,
        borderColor: colors.transparent,
      },
      hover: {
        color: colors.black,
        backgroundColor: colors.gray450,
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
