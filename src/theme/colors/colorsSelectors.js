import { getColors } from '../themeSelectors';

// eslint-disable-next-line
export const getColor = color => ({ theme }) => getColors(theme)[color];
