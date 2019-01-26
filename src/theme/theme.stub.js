const colors = {
  inherit: 'inherit',
  transparent: 'transparent',
  white: '#fff',
  gray50: '#fafafa',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray450: '#bec5cc',
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
    typography: {
      baseFontSize: 16, // in px
      baseLineHeight: 1.5,
    },
    // heading theme
    heading: {
      sizings: {
        h1: {
          fontSize: '3rem',
        },
        h2: {
          fontSize: '2.5rem',
        },
        h3: {
          fontSize: '2rem',
        },
        h4: {
          fontSize: '1.5rem',
        },
        h5: {
          fontSize: '1.25rem',
        },
        h6: {
          fontSize: '1rem',
        },
      },
      colors: {
        lighter: colors.gray700,
        default: colors.gray800,
        darker: colors.gray900,
        black: colors.black,
        white: colors.white,
        primary: colors.primary500,
        success: colors.success500,
        warning: colors.warning500,
        danger: colors.danger500,
      },
      common: {
        fontWeight: 'bold',
        fontFamily: 'Lato, Arial, Helvetica, sans-serif',
      },
    },
    // text theme
    text: {
      sizings: {
        l: {
          fontSize: '1.25rem',
        },
        m: {
          fontSize: '1rem',
        },
        s: {
          fontSize: '.0875rem',
        },
        xs: {
          fontSize: '.75rem',
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
        fontFamily: 'Lato, Arial, Helvetica, sans-serif',
      },
    },
    colorBox: {
      bgColors: {
        transparent: colors.transparent,
        inherit: colors.inherit,
        white: colors.white,
        lightest: colors.gray50,
        lighter: colors.gray100,
        light: colors.gray200,
        normal: colors.gray300,
        dark: colors.gray400,
        darker: colors.gray500,
        darkest: colors.gray600,

        washedPrimary: colors.primary50,
        primary: colors.primary500,
        washedSuccess: colors.success50,
        success: colors.success500,
        washedDanger: colors.danger50,
        danger: colors.danger500,
        washedWarning: colors.warning50,
        warning: colors.warning500,
      },
      borderColors: {
        transparent: colors.transparent,
        white: colors.white,
        light: colors.gray50,
        default: colors.gray100,
        dark: colors.gray200,
        primary: colors.primary100,
        success: colors.success100,
        warning: colors.warning100,
        danger: colors.danger100,
      },
    },
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
      btnSizes: {
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
    },
    // link theme
    link: {
      linktypes: {
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
    },
    // form theme
    form: {
      // text input, textarea, and select styles
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
        common: {
          fontSize: '1rem',
          fontFamily: 'Lato, Arial, Helvetica, sans-serif',
        },
      },
      // inputs for inline editing
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
        common: {
          fontSize: '1rem',
          fontFamily: 'Lato, Arial, Helvetica, sans-serif',
        },
      },
      // radio and checkbox styles
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
            // no theme for disabled because
          },
          invalid: {
            borderColor: colors.danger500,
            backgroundColor: colors.transparent,
          },
        },
        common: {},
      },
      // toggle styles
      toggle: {
        states: {
          normal: {
            backgroundColor: colors.gray400,
          },
          checked: {
            backgroundColor: colors.primary500,
          },
        },
      },
    },
  },
};

export default theme;
