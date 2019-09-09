import theme from '../theme';
import { getTypography, getColors, getForm, getMode } from '../themeSelectors';

describe('themeSelectors', () => {
  describe('errors', () => {
    it.each([
      [getTypography, 'typography'],
      [getColors, 'colors'],
      [getForm, 'form'],
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
