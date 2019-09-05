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

  primary400: '#42A5F5',
  primary600: '#1E88E5',
  success400: '#66BB6A',
  success600: '#43A047',
  warning400: '#FFEE58',
  warning600: '#FDD835',
  danger400: '#FF8A65',
  danger600: '#F4511E',
};

export default colors;
