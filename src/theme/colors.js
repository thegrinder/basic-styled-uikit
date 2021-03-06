import { getColors } from './themeSelectors';

export const getColor = (color) => ({ theme }) => getColors(theme)[color];

const colors = {
  inherit: 'inherit',
  transparent: 'transparent',
  white: '#fff',
  gray50: '#fafafa',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray450: '#bec5cc',
  gray500: '#adb5bd',
  gray600: '#868e96',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#161616',

  primary50: '#e3f2fd',
  primary100: '#bbdefb',
  primary200: '#90caf9',
  primary300: '#64b5f6',
  primary400: '#42a5f5',
  primary500: '#2196f3',
  primary600: '#1e88e5',
  primary700: '#1976d2',
  primary800: '#1565c0',
  primary900: '#0d47a1',

  success50: '#e8f5e9',
  success100: '#c8e6c9',
  success200: '#a5d6a7',
  success300: '#81c784',
  success400: '#66bb6a',
  success500: '#4caf50',
  success600: '#43a047',
  success700: '#388e3c',
  success800: '#2e7d32',
  success900: '#1b5e20',

  warning50: '#fffde7',
  warning100: '#fff9c4',
  warning200: '#fff59d',
  warning300: '#fff176',
  warning400: '#ffee58',
  warning500: '#ffeb3b',
  warning600: '#fdd835',
  warning700: '#fbc02d',
  warning800: '#f9a825',
  warning900: '#f57f17',

  danger50: '#ffebee',
  danger100: '#ffcdd2',
  danger200: '#ef9a9a',
  danger300: '#e57373',
  danger400: '#ef5350',
  danger500: '#f44336',
  danger600: '#e53935',
  danger700: '#d32f2f',
  danger800: '#c62828',
  danger900: '#b71c1c',
};

export default colors;
