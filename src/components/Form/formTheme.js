import colors from '../../theme/colors';

const formTheme = {
  // text input, textarea, and select styles
  regular: {
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
  // inputs for inline editing
  inline: {
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
  // radio and checkbox styles
  misc: {
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
      // no theme for disabled because it's not simple
      // enough to handle all the cases (e.g disabled checked)
    },
    invalid: {
      borderColor: colors.danger500,
      backgroundColor: colors.transparent,
    },
  },
  // toggle styles
  toggle: {
    normal: {
      backgroundColor: colors.gray400,
    },
    checked: {
      backgroundColor: colors.primary500,
    },
  },
};

export default formTheme;
