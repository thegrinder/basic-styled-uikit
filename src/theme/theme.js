import colors, { getColor as getColorSelector } from './colors';
import typography, { rem as remHelper } from './typography';
import button from '../components/Button/buttonTheme';
import form from '../components/Form/formTheme';
import heading from '../components/Heading/headingTheme';
import text from '../components/Text/textTheme';
import colorBox from '../components/ColorBox/colorBoxTheme';
import link from '../components/Link/linkTheme';

const theme = {
  uiKit: {
    typography,
    colors,
    button,
    form,
    heading,
    text,
    colorBox,
    link,
  },
};

export const getColor = getColorSelector;
export const rem = remHelper;

export default theme;
