import { transparentize } from 'polished';
import colors from '../../theme/colors';

export const formDarkTheme = {
  regular: {
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
  inline: {
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
  misc: {
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
  toggle: {
    states: {
      normal: {
        backgroundColor: colors.neutral600,
      },
      checked: {
        backgroundColor: colors.primary400,
      },
    },
  },
};

export const formBaseTheme = {
  // text input, textarea, and select
  regular: {
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
  // inline input
  inline: {
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
  // radio and checkbox
  misc: {
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
  common: {
    regular: {
      fontSize: '1rem',
      fontFamily: 'Lato, Arial, Helvetica, sans-serif',
    },
    inline: {
      fontSize: '1rem',
      fontFamily: 'Lato, Arial, Helvetica, sans-serif',
    },
    misc: {
      // to change the size of checkbox and radio input you can increase/decrease the font size
      fontSize: '1rem',
    },
  },
};
