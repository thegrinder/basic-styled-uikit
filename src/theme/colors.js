import { getColors } from './themeSelectors';

export const getColor = color => ({ theme }) => getColors(theme)[color];

const colors = {
  inherit: 'inherit',
  transparent: 'transparent',
  neutral0: '#fff',
  neutral50: '#fafafa',
  neutral100: '#f8f9fa',
  neutral200: '#e9ecef',
  neutral300: '#dee2e6',
  neutral400: '#ced4da',
  neutral500: '#adb5bd',
  neutral600: '#868e96',
  neutral700: '#495057',
  neutral800: '#343a40',
  neutral900: '#212529',
  neutral1000: '#161616',

  primary50: '#e3f2fd',
  primary500: '#2196f3',

  success50: '#e8f5e9',
  success500: '#4caf50',

  warning50: '#fffde7',
  warning500: '#ffeb3b',

  danger50: '#ffebee',
  danger500: '#f44336',
};

export default colors;
