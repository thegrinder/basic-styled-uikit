import { darken, lighten } from 'polished';

export const buttonDarkTheme = {
  btnTypes: {
    default: {
      normal: {
        color: '#161616',
        backgroundColor: '#ced4da',
      },
      hover: {
        backgroundColor: lighten(0.05, '#ced4da'),
      },
      active: {
        backgroundColor: darken(0.05, '#ced4da'),
      },
    },
    primary: {
      normal: {
        color: '#161616',
        backgroundColor: '#42A5F5',
      },
      hover: {
        backgroundColor: lighten(0.05, '#42A5F5'),
      },
      active: {
        backgroundColor: darken(0.05, '#42A5F5'),
      },
    },
    danger: {
      normal: {
        color: '#161616',
        backgroundColor: '#CF6679',
      },
      hover: {
        backgroundColor: lighten(0.05, '#CF6679'),
      },
      active: {
        backgroundColor: darken(0.05, '#CF6679'),
      },
    },
  },
};

export const buttonBaseTheme = {
  btnTypes: {
    default: {
      normal: {
        color: '#fff',
        backgroundColor: '#868e96',
      },
      hover: {
        backgroundColor: lighten(0.05, '#868e96'),
      },
      active: {
        backgroundColor: darken(0.05, '#868e96'),
      },
    },
    primary: {
      normal: {
        color: '#fff',
        backgroundColor: '#1E88E5',
      },
      hover: {
        backgroundColor: lighten(0.05, '#1E88E5'),
      },
      active: {
        backgroundColor: darken(0.05, '#1E88E5'),
      },
    },
    danger: {
      normal: {
        color: '#fff',
        backgroundColor: '#F4511E',
      },
      hover: {
        backgroundColor: lighten(0.05, '#F4511E'),
      },
      active: {
        backgroundColor: darken(0.05, '#F4511E'),
      },
    },
  },
  sizings: {
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
    fontWeight: '600',
    fontFamily: `'Inter var', sans-serif`,
  },
};
