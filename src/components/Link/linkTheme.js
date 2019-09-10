import { darken, lighten } from 'polished';

export const linkDarkTheme = {
  linkTypes: {
    default: {
      normal: {
        color: '#42A5F5',
      },
      hover: {
        color: lighten(0.1, '#42A5F5'),
      },
    },
    muted: {
      normal: {
        color: '#ced4da',
      },
      hover: {
        color: lighten(0.1, '#ced4da'),
      },
    },
  },
};

export const linkBaseTheme = {
  linkTypes: {
    default: {
      normal: {
        color: '#1E88E5',
      },
      hover: {
        color: darken(0.1, '#1E88E5'),
      },
    },
    muted: {
      normal: {
        color: '#868e96',
      },
      hover: {
        color: darken(0.1, '#868e96'),
      },
    },
  },
  common: {
    fontFamily: `'Inter var', sans-serif`,
  },
};
