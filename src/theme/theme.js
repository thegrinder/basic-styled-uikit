import colors from './colors';
import { typographyBaseTheme } from '../components/Typography/typographyTheme';
import form from '../components/Form/formTheme';
import { colorBoxBaseTheme } from '../components/ColorBox/colorBoxTheme';
import link from '../components/Link/linkTheme';

const theme = {
  mode: 'light',
  typography: typographyBaseTheme,
  colors,
  form,
  colorBox: colorBoxBaseTheme,
  link,
};

export default theme;
