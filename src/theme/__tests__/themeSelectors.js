import theme from '../theme';
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
      expect(selector(theme)).toEqual(theme.uiKit[namespace]);
      expect(() => selector()).toThrowError(
        'You need to provide a theme object'
      );
      expect(() => selector({})).toThrowError(
        'Your theme has to be under uiKit key'
      );
      expect(() => selector({ uiKit: {} })).toThrowError(
        `Your theme is missing ${namespace} key`
      );
    });
  });
});
