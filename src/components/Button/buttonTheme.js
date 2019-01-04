import { rem } from '../../helpers/utils';

const buttonTheme = {
  btnTypes: {
    basic: {
      normal: {
        color: '#212529',
        backgroundColor: 'transparent',
        borderColor: '#dee2e6',
      },
      hover: {
        color: '#212529',
        backgroundColor: 'transparent',
        borderColor: '#adb5bd',
      },
      active: {
        color: '#212529',
        backgroundColor: 'transparent',
        borderColor: '#495057',
      },
    },
    default: {
      normal: {
        color: '#161616',
        backgroundColor: '#dee2e6',
        borderColor: 'transparent',
      },
      hover: {
        color: '#161616',
        backgroundColor: '#ced4da',
        borderColor: 'transparent',
      },
      active: {
        color: '#161616',
        backgroundColor: '#adb5bd',
        borderColor: 'transparent',
      },
    },
    primary: {
      normal: {
        color: '#fff',
        backgroundColor: '#03a9f4',
        borderColor: 'transparent',
      },
      hover: {
        color: '#fff',
        backgroundColor: '#039be5',
        borderColor: 'transparent',
      },
      active: {
        color: '#fff',
        backgroundColor: '#0288d1',
        borderColor: 'transparent',
      },
    },
    danger: {
      normal: {
        color: '#fff',
        backgroundColor: '#f44336',
        borderColor: 'transparent',
      },
      hover: {
        color: '#fff',
        backgroundColor: '#e53935',
        borderColor: 'transparent',
      },
      active: {
        color: '#fff',
        backgroundColor: '#d32f2f',
        borderColor: 'transparent',
      },
    },
  },
  btnSizes: {
    small: {
      padding: `0 ${rem(15)}`,
      lineHeight: rem(28),
      fontSize: rem(14),
    },
    default: {
      padding: `0 ${rem(30)}`,
      fontSize: rem(16),
      lineHeight: rem(38),
    },
    large: {
      padding: `0 ${rem(40)}`,
      lineHeight: rem(53),
      fontSize: rem(22),
    },
  },
  common: {
    fontWeight: '700',
    letterSpacing: '.4px',
  },
};

export default buttonTheme;
