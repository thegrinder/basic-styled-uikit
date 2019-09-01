import theme from '../../../theme/theme';
import headingTheme from '../headingTheme';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
  getHeadingOpacity,
} from '../headingSelectors';

const {
  sizings,
  colors,
  opacities,
  common,
} = headingTheme;

describe('headingTheme selectors', () => {
  describe('getHeadingSizingStyle', () => {
    Object.keys(sizings).forEach((sizing) => {
      it('should return the correct size style object', () => {
        expect(getHeadingSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should return empty object if sizing is invalid', () => {
      expect(getHeadingSizingStyle(theme, 'invalidSizing')).toEqual({});
    });
  });

  describe('getHeadingColor', () => {
    Object.keys(colors).forEach((color) => {
      it('should return the correct color', () => {
        expect(getHeadingColor(theme, color)).toEqual(colors[color]);
      });
    });
  });

  describe('getHeadingOpacity', () => {
    Object.keys(opacities).forEach((emphasis) => {
      it('should return the correct opacity', () => {
        expect(getHeadingOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
    });
  });

  describe('getHeadingCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getHeadingCommonStyle(theme)).toEqual(common);
    });
  });
});
