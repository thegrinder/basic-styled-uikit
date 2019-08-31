import colors from '../../theme/colors';

const formTheme = {
  // text input, textarea, and select
  regular: {
    states: {
      valid: {
        normal: {
          backgroundColor: colors.neutral0,
          borderColor: colors.neutral300,
          color: colors.neutral700,
        },
        active: {
          backgroundColor: colors.neutral0,
          borderColor: colors.primary500,
          color: colors.neutral700,
        },
        disabled: {
          backgroundColor: colors.neutral100,
          borderColor: colors.neutral300,
          color: colors.neutral600,
        },
      },
      invalid: {
        backgroundColor: colors.neutral0,
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
          backgroundColor: colors.transparent,
          borderColor: colors.transparent,
          color: colors.neutral700,
        },
        hover: {
          backgroundColor: colors.transparent,
          borderColor: colors.neutral300,
          color: colors.neutral700,
        },
        active: {
          backgroundColor: colors.transparent,
          borderColor: colors.primary500,
          color: colors.neutral700,
        },
        disabled: {
          backgroundColor: colors.neutral100,
          borderColor: colors.neutral300,
          color: colors.neutral600,
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
  // radio and checkbox
  misc: {
    states: {
      valid: {
        normal: {
          borderColor: colors.neutral300,
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
        // no theme for disabled because it's not simple
        // enough to handle all the cases (e.g disabled checked)
      },
      invalid: {
        borderColor: colors.danger500,
        backgroundColor: colors.transparent,
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
