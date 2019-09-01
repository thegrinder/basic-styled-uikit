import theme from '../../../theme/theme';
import textTheme from '../textTheme';
import {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
  getTextOpacity,
} from '../textSelectors';

const {
  sizings,
  opacities,
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

  describe('getTextOpacity', () => {
    Object.keys(opacities).forEach((emphasis) => {
      it('should return the correct opacity', () => {
        expect(getTextOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
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
