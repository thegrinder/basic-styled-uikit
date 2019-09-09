import colors from './colors';
import { typographyBaseTheme } from '../components/Typography/typographyTheme';
import form from '../components/Form/formTheme';
import { colorBoxBaseTheme } from '../components/ColorBox/colorBoxTheme';

const theme = {
  mode: 'light',
  typography: typographyBaseTheme,
  colors,
  form,
  colorBox: colorBoxBaseTheme,
};

export default theme;
