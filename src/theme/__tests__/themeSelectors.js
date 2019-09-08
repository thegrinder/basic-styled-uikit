import globalTheme from '../theme';
import { buttonBaseTheme } from '../../components/Button/buttonTheme';
import {
  getTypography,
  getColors,
  getForm,
  getColorBox,
  getLink,
  getMode,
} from '../themeSelectors';

const theme = {
  ...globalTheme,
  button: buttonBaseTheme,
};

describe('themeSelectors', () => {
  describe('errors', () => {
    it.each([
      [getTypography, 'typography'],
      [getColors, 'colors'],
      [getForm, 'form'],
      [getColorBox, 'colorBox'],
      [getLink, 'link'],
      [getMode, 'mode'],
    ])('%s should handle success and failure', (selector, namespace) => {
      expect(selector(theme)).toEqual(theme[namespace]);
      expect(() => selector()).toThrowError(
        'You need to provide a theme object'
      );
      expect(() => selector({})).toThrowError(
        `Your theme is missing ${namespace} key`
      );
    });
  });
});
