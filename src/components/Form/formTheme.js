import { transparentize } from 'polished';

export const formDarkTheme = {
  regular: {
    states: {
      valid: {
        normal: {
          borderColor: '#ced4da',
          color: '#fff',
        },
        active: {
          borderColor: '#42A5F5',
        },
        disabled: {
          borderColor: transparentize(0.8, '#ced4da'),
          color: transparentize(0.8, '#fff'),
        },
      },
      invalid: {
        color: '#FF8A65',
        borderColor: '#FF8A65',
      },
    },
  },
  inline: {
    states: {
      valid: {
        normal: {
          color: '#fff',
        },
        hover: {
          borderColor: '#ced4da',
        },
        active: {
          borderColor: '#1E88E5',
        },
        disabled: {
          borderColor: transparentize(0.8, '#ced4da'),
          color: transparentize(0.8, '#fff'),
        },
      },
      invalid: {
        color: '#F4511E',
        borderColor: '#F4511E',
      },
    },
  },
  misc: {
    states: {
      valid: {
        normal: {
          borderColor: '#ced4da',
        },
        active: {
          borderColor: '#42A5F5',
        },
        checked: {
          borderColor: '#42A5F5',
          backgroundColor: '#42A5F5',
        },
      },
      invalid: {
        borderColor: '#FF8A65',
      },
    },
  },
  toggle: {
    states: {
      normal: {
        backgroundColor: '#868e96',
      },
      checked: {
        backgroundColor: '#42A5F5',
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
          borderColor: '#ced4da',
          color: '#161616',
        },
        active: {
          borderColor: '#1E88E5',
        },
        disabled: {
          color: '#868e96',
          backgroundColor: '#f8f9fa',
        },
      },
      invalid: {
        color: '#F4511E',
        borderColor: '#F4511E',
      },
    },
  },
  // inline input
  inline: {
    states: {
      valid: {
        normal: {
          color: '#161616',
        },
        hover: {
          borderColor: '#ced4da',
          color: '#161616',
        },
        active: {
          borderColor: '#1E88E5',
          color: '#161616',
        },
        disabled: {
          borderColor: '#ced4da',
          color: '#868e96',
          backgroundColor: '#f8f9fa',
        },
      },
      invalid: {
        color: '#F4511E',
        borderColor: '#F4511E',
      },
    },
  },
  // radio and checkbox
  misc: {
    states: {
      valid: {
        normal: {
          borderColor: '#ced4da',
        },
        active: {
          borderColor: '#1E88E5',
        },
        checked: {
          borderColor: '#1E88E5',
          backgroundColor: '#1E88E5',
        },
      },
      invalid: {
        borderColor: '#F4511E',
      },
    },
  },
  // toggle
  toggle: {
    states: {
      normal: {
        backgroundColor: '#ced4da',
      },
      checked: {
        backgroundColor: '#1E88E5',
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
