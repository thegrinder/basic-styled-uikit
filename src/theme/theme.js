import colors, { getColor as getColorSelector } from './colors';
import { rem as remHelper } from '../helpers/utils';
import button from '../components/Button/buttonTheme';
import link from '../components/Link/linkTheme';
import form from '../components/Form/formTheme';
import text from '../components/Text/textTheme';
import heading from '../components/Heading/headingTheme';

const theme = {
  uiKit: {
    button,
    link,
    form,
    text,
    heading,
    colors,
  },
};

export const getColor = getColorSelector;
export const rem = remHelper;

export default theme;
