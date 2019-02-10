import theme from '../../../theme/theme';
import textTheme from '../textTheme';
import {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
} from '../textSelectors';

const {
  sizings,
  colors,
  common,
} = textTheme;

describe('textTheme selectors', () => {
  describe('getTextSizingStyle', () => {
    Object.keys(sizings).forEach((sizing) => {
      it('should return the correct size style object', () => {
        expect(getTextSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should return empty object if sizing is invalid', () => {
      expect(getTextSizingStyle(theme, 'invalidSizing')).toEqual({});
    });
  });

  describe('getTextColor', () => {
    Object.keys(colors).forEach((color) => {
      it('should return the correct color', () => {
        expect(getTextColor(theme, color)).toEqual(colors[color]);
      });
    });
  });

  describe('getTextCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getTextCommonStyle(theme)).toEqual(common);
    });
  });
});
