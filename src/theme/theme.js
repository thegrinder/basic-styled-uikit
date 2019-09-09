import colors from './colors';
import { typographyBaseTheme } from '../components/Typography/typographyTheme';
import { formBaseTheme } from '../components/Form/formTheme';
import { colorBoxBaseTheme } from '../components/ColorBox/colorBoxTheme';

const theme = {
  mode: 'light',
  typography: typographyBaseTheme,
  colors,
  form: formBaseTheme,
  colorBox: colorBoxBaseTheme,
};

export default theme;
