import { rem } from 'basic-styled-uikit';

const colors = {
  transparent: 'transparent',
  white: '#fff',
  gray50: '#fafafa',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#868e96',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#161616',

  primary50: '#e3f2fd',
  primary100: '#bbdefb',
  primary200: '#90caf9',
  primary300: '#64b5f6',
  primary400: '#42a5f5',
  primary500: '#2196f3',
  primary600: '#1e88e5',
  primary700: '#1976d2',
  primary800: '#1565c0',
  primary900: '#0d47a1',

  success50: '#e8f5e9',
  success100: '#c8e6c9',
  success200: '#a5d6a7',
  success300: '#81c784',
  success400: '#66bb6a',
  success500: '#4caf50',
  success600: '#43a047',
  success700: '#388e3c',
  success800: '#2e7d32',
  success900: '#1b5e20',

  warning50: '#fffde7',
  warning100: '#fff9c4',
  warning200: '#fff59d',
  warning300: '#fff176',
  warning400: '#ffee58',
  warning500: '#ffeb3b',
  warning600: '#fdd835',
  warning700: '#fbc02d',
  warning800: '#f9a825',
  warning900: '#f57f17',

  danger50: '#ffebee',
  danger100: '#ffcdd2',
  danger200: '#ef9a9a',
  danger300: '#e57373',
  danger400: '#ef5350',
  danger500: '#f44336',
  danger600: '#e53935',
  danger700: '#d32f2f',
  danger800: '#c62828',
  danger900: '#b71c1c',
};

const theme = {
  uiKit: {
    colors,
    // button theme
    button: {
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
    },
    // form theme
    form: {
      regular: {
        states: {
          valid: {
            normal: {
              backgroundColor: colors.white,
              borderColor: colors.gray300,
              color: colors.gray700,
            },
            active: {
              backgroundColor: colors.white,
              borderColor: colors.primary500,
              color: colors.gray700,
            },
            disabled: {
              backgroundColor: colors.gray100,
              borderColor: colors.gray300,
              color: colors.gray600,
            },
          },
          invalid: {
            backgroundColor: colors.white,
            color: colors.danger500,
            borderColor: colors.danger500,
          },
        },
        common: {},
      },
      inline: {
        states: {
          valid: {
            normal: {
              backgroundColor: colors.transparent,
              borderColor: colors.transparent,
              color: colors.gray700,
            },
            hover: {
              backgroundColor: colors.transparent,
              borderColor: colors.gray300,
              color: colors.gray700,
            },
            active: {
              backgroundColor: colors.transparent,
              borderColor: colors.primary500,
              color: colors.gray700,
            },
            disabled: {
              backgroundColor: colors.gray100,
              borderColor: colors.gray300,
              color: colors.gray600,
            },
          },
          invalid: {
            backgroundColor: colors.transparent,
            color: colors.danger500,
            borderColor: colors.danger500,
          },
        },
        common: {},
      },
      // radio and checkbox theme
      misc: {
        states: {
          valid: {
            normal: {
              borderColor: colors.gray300,
              backgroundColor: colors.transparent,
            },
            active: {
              borderColor: colors.primary500,
              backgroundColor: colors.transparent,
            },
            checked: {
              borderColor: colors.transparent,
              backgroundColor: colors.primary500,
            },
          },
          invalid: {
            borderColor: colors.danger500,
            backgroundColor: colors.transparent,
          },
        },
        common: {},
      },
      // toggle theme
      toggle: {
        normal: {
          backgroundColor: colors.gray400,
        },
        checked: {
          backgroundColor: colors.primary500,
        },
      },
    },
    text: {
      sizings: {
        small: rem(14),
        medium: rem(16),
        large: rem(20),
      },
    },
    heading: {
      sizings: {
        h1: rem(36),
        h2: rem(32),
        h3: rem(28),
        h4: rem(24),
        h5: rem(20),
        h6: rem(18),
      },
    },
  },
};

export default theme;
