import { transparentize } from 'polished';
import colors from '../../theme/colors';

const formTheme = {
  // text input, textarea, and select
  regular: {
    light: {
      states: {
        valid: {
          normal: {
            borderColor: colors.neutral400,
            color: colors.neutral700,
          },
          active: {
            borderColor: colors.primary600,
          },
          disabled: {
            color: colors.neutral600,
            backgroundColor: colors.neutral100,
          },
        },
        invalid: {
          color: colors.danger600,
          borderColor: colors.danger600,
        },
      },
    },
    dark: {
      states: {
        valid: {
          normal: {
            borderColor: colors.neutral400,
            color: colors.neutral0,
          },
          active: {
            borderColor: colors.primary400,
          },
          disabled: {
            borderColor: transparentize(0.8, colors.neutral400),
            color: transparentize(0.8, colors.neutral0),
          },
        },
        invalid: {
          color: colors.danger400,
          borderColor: colors.danger400,
        },
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
          borderColor: colors.primary600,
          color: colors.neutral700,
        },
        disabled: {
          borderColor: colors.neutral300,
          color: colors.neutral600,
          backgroundColor: colors.neutral100,
        },
      },
      invalid: {
        color: colors.danger600,
        borderColor: colors.danger600,
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
          borderColor: colors.primary600,
        },
        checked: {
          borderColor: colors.transparent,
          backgroundColor: colors.primary600,
        },
        // no theme for disabled because it's not simple
        // enough to handle all the cases (e.g disabled checked)
      },
      invalid: {
        borderColor: colors.danger600,
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
        backgroundColor: colors.primary600,
      },
    },
  },
};

export default formTheme;
