import colors from '../../theme/colors';

const formTheme = {
  // text input, textarea, and select
  regular: {
    states: {
      valid: {
        normal: {
          borderColor: colors.neutral300,
          color: colors.neutral700,
        },
        active: {
          borderColor: colors.primary500,
          color: colors.neutral700,
        },
        disabled: {
          borderColor: colors.neutral300,
          color: colors.neutral600,
          backgroundColor: colors.neutral100,
        },
      },
      invalid: {
        color: colors.danger500,
        borderColor: colors.danger500,
      },
    },
    common: {
      fontSize: '1rem',
      fontFamily: 'Lato, Arial, Helvetica, sans-serif',
    },
  },
  // inline input
  inline: {
    states: {
      valid: {
        normal: {
          color: colors.neutral700,
        },
        hover: {
          borderColor: colors.neutral300,
          color: colors.neutral700,
        },
        active: {
          borderColor: colors.primary500,
          color: colors.neutral700,
        },
        disabled: {
          borderColor: colors.neutral300,
          color: colors.neutral600,
          backgroundColor: colors.neutral100,
        },
      },
      invalid: {
        color: colors.danger500,
        borderColor: colors.danger500,
      },
    },
    common: {
      fontSize: '1rem',
      fontFamily: 'Lato, Arial, Helvetica, sans-serif',
    },
  },
  // radio and checkbox
  misc: {
    states: {
      valid: {
        normal: {
          borderColor: colors.neutral300,
        },
        active: {
          borderColor: colors.primary500,
        },
        checked: {
          borderColor: colors.transparent,
          backgroundColor: colors.primary500,
        },
        // no theme for disabled because it's not simple
        // enough to handle all the cases (e.g disabled checked)
      },
      invalid: {
        borderColor: colors.danger500,
      },
    },
    common: {},
  },
  // toggle
  toggle: {
    states: {
      normal: {
        backgroundColor: colors.neutral400,
      },
      checked: {
        backgroundColor: colors.primary500,
      },
    },
  },
};

export default formTheme;
