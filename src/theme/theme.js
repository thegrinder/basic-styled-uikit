import colors, { getColor as getColorSelector } from './colors';
import typography from './typography';
import { rem as remHelper } from '../helpers/utils';
import button from '../components/Button/buttonTheme';
import form from '../components/Form/formTheme';
import heading from '../components/Heading/headingTheme';
import text from '../components/Text/textTheme';
import colorBox from '../components/ColorBox/colorBoxTheme';

const theme = {
  uiKit: {
    typography,
    colors,
    button,
    form,
    heading,
    text,
    colorBox,
  },
};

export const getColor = getColorSelector;
export const rem = remHelper;

export default theme;
