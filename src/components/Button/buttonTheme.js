import { rem } from '../../helpers/utils';

const buttonTheme = {
  btnTypes: {
    default: {
      normal: {
        color: '#222',
        backgroundColor: 'transparent',
        borderColor: '#e5e5e5',
      },
      hover: {
        color: '#222',
        backgroundColor: 'transparent',
        borderColor: '#b2b2b2',
      },
      active: {
        color: '#222',
        backgroundColor: 'transparent',
        borderColor: '#999',
      },
    },
    primary: {
      normal: {
        color: '#fff',
        backgroundColor: '#1e87f0',
        borderColor: 'transparent',
      },
      hover: {
        color: '#fff',
        backgroundColor: '#0f7ae5',
        borderColor: 'transparent',
      },
      active: {
        color: '#fff',
        backgroundColor: '#0e6dcd',
        borderColor: 'transparent',
      },
    },
    secondary: {
      normal: {
        color: '#fff',
        backgroundColor: '#222',
        borderColor: 'transparent',
      },
      hover: {
        color: '#fff',
        backgroundColor: '#151515',
        borderColor: 'transparent',
      },
      active: {
        color: '#fff',
        backgroundColor: '#080808',
        borderColor: 'transparent',
      },
    },
    danger: {
      normal: {
        color: '#fff',
        backgroundColor: '#f0506e',
        borderColor: 'transparent',
      },
      hover: {
        color: '#fff',
        backgroundColor: '#ee395b',
        borderColor: 'transparent',
      },
      active: {
        color: '#fff',
        backgroundColor: '#ec2147',
        borderColor: 'transparent',
      },
    },
  },
  btnSizes: {
    small: {
      padding: `0 ${rem(15)}`,
      lineHeight: rem(28),
      fontSize: rem(10),
    },
    default: {
      padding: `0 ${rem(30)}`,
      fontSize: rem(12),
      lineHeight: rem(38),
    },
    large: {
      padding: `0 ${rem(40)}`,
      lineHeight: rem(53),
      fontSize: rem(14),
    },
  },
};

export default buttonTheme;
