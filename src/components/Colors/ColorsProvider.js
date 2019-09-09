import { createProvider } from '../../helpers';
import { baseColorsTheme, darkColorsTheme } from './colorsTheme';

const ColorsProvider = createProvider(
  'colors',
  baseColorsTheme,
  darkColorsTheme
);

export default ColorsProvider;
