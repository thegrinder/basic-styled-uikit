import { getColors } from './themeSelectors';

export const getColor = color => ({ theme }) => getColors(theme)[color];

const colors = {
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

  primary500: '#2196f3',
  success500: '#4caf50',
  warning500: '#ffeb3b',
  danger500: '#f44336',
};

export default colors;
