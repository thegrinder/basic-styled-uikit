import { getColors } from './themeSelectors';

export const getColor = color => ({ theme }) => getColors(theme)[color];

const colors = {
  neutral0: '#fff',
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

  primary200: '#90caf9',
  primary500: '#2196f3',
  success200: '#a5d6a7',
  success500: '#4caf50',
  warning200: '#fff59d',
  warning500: '#ffeb3b',
  danger200: '#ef9a9a',
  danger500: '#f44336',
};

export default colors;
