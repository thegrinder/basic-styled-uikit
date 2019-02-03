import colors from '../../theme/colors';

const formTheme = {
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
};

export const getRegularInputCommonStyle = theme => theme.uiKit.form.regular.common;

export const getRegularInputStyle = (theme, invalid, state) => {
  const { states } = theme.uiKit.form.regular;
  return invalid
    ? states.invalid
    : states.valid[state];
};

export const getMiscInputCommonStyle = theme => theme.uiKit.form.misc.common;
export const getMiscInputStyle = (theme, invalid, state) => {
  const { states } = theme.uiKit.form.misc;
  return invalid && state === 'normal'
    ? states.invalid
    : states.valid[state];
};

export const getInlineInputCommonStyle = theme => theme.uiKit.form.inline.common;
export const getInlineInputStyle = (theme, invalid, state) => {
  const { states } = theme.uiKit.form.inline;
  return invalid
    ? states.invalid
    : states.valid[state];
};

export const getToggleStyle = (theme, state) => theme.uiKit.form.toggle.states[state];

export default formTheme;
