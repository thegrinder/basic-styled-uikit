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
            color: colors.neutral1000,
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
    light: {
      states: {
        valid: {
          normal: {
            color: colors.neutral1000,
          },
          hover: {
            borderColor: colors.neutral400,
            color: colors.neutral1000,
          },
          active: {
            borderColor: colors.primary600,
            color: colors.neutral1000,
          },
          disabled: {
            borderColor: colors.neutral400,
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
            color: colors.neutral0,
          },
          hover: {
            borderColor: colors.neutral400,
          },
          active: {
            borderColor: colors.primary600,
          },
          disabled: {
            borderColor: transparentize(0.8, colors.neutral400),
            color: transparentize(0.8, colors.neutral0),
          },
        },
        invalid: {
          color: colors.danger600,
          borderColor: colors.danger600,
        },
      },
    },
    common: {
      fontSize: '1rem',
      fontFamily: 'Lato, Arial, Helvetica, sans-serif',
    },
  },
  // radio and checkbox
  misc: {
    light: {
      states: {
        valid: {
          normal: {
            borderColor: colors.neutral400,
          },
          active: {
            borderColor: colors.primary600,
          },
          checked: {
            borderColor: colors.primary600,
            backgroundColor: colors.primary600,
          },
        },
        invalid: {
          borderColor: colors.danger600,
        },
      },
    },
    dark: {
      states: {
        valid: {
          normal: {
            borderColor: colors.neutral400,
          },
          active: {
            borderColor: colors.primary400,
          },
          checked: {
            borderColor: colors.primary400,
            backgroundColor: colors.primary400,
          },
        },
        invalid: {
          borderColor: colors.danger400,
        },
      },
    },
    common: {
      // to change the size of checkbox and radio input you can increase/decrease the font size
      fontSize: '1rem',
    },
  },
  // toggle
  toggle: {
    light: {
      states: {
        normal: {
          backgroundColor: colors.neutral400,
        },
        checked: {
          backgroundColor: colors.primary600,
        },
      },
    },
    dark: {
      states: {
        normal: {
          backgroundColor: colors.neutral600,
        },
        checked: {
          backgroundColor: colors.primary400,
        },
      },
    },
  },
};

export default formTheme;
