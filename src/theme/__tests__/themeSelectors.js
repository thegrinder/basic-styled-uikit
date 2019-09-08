import globalTheme from '../theme';
import buttonTheme from '../../components/Button/buttonTheme';
import {
  getTypography,
  getColors,
  getButton,
  getForm,
  getHeading,
  getText,
  getColorBox,
  getLink,
  getMode,
} from '../themeSelectors';

const theme = {
  ...globalTheme,
  button: buttonTheme,
};

describe('themeSelectors', () => {
  describe('errors', () => {
    it.each([
      [getTypography, 'typography'],
      [getColors, 'colors'],
      [getButton, 'button'],
      [getForm, 'form'],
      [getHeading, 'heading'],
      [getText, 'text'],
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
