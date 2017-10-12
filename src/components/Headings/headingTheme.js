import { rem } from '../../helpers/utils';

const headingTheme = {
  colours: {
    white: {
      color: '#fff',
    },
    lightest: {
      color: '#ccc',
    },
    light: {
      color: '#999',
    },
    normal: {
      color: '#666',
    },
    dark: {
      color: '#424242',
    },
    primary: {
      color: '#1e87f0',
    },
    success: {
      color: '#32d296',
    },
    warning: {
      color: '#faa05a',
    },
    danger: {
      color: '#f0506e',
    },
  },
  sizings: {
    h1: {
      fontSize: rem(96),
    },
    h2: {
      fontSize: rem(80),
    },
    h3: {
      fontSize: rem(48),
    },
    h4: {
      fontSize: rem(36),
    },
    h5: {
      fontSize: rem(24),
    },
    h6: {
      fontSize: rem(20),
    },
  },
};

export default headingTheme;
