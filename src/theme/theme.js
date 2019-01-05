import colors, { getColor as getColorSelector } from './colors';
import typography from './typography';
import { rem as remHelper } from '../helpers/utils';
import button from '../components/Button/buttonTheme';
import form from '../components/Form/formTheme';

const theme = {
  uiKit: {
    colors,
    typography,
    button,
    form,
  },
};

export const getColor = getColorSelector;
export const rem = remHelper;

export default theme;
