import { createProvider } from '../../helpers';
import { colorBoxBaseTheme, colorBoxDarkTheme } from './colorBoxTheme';

const ColorBoxProvider = createProvider(
  'colorBox',
  colorBoxBaseTheme,
  colorBoxDarkTheme
);

export default ColorBoxProvider;
