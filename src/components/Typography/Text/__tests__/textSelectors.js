import { minimalTheme } from '../../TypographyProvider';
import {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
  getTextOpacity,
} from '../textSelectors';

const theme = {
  typography: minimalTheme,
};

const {
  opacities,
  colors,
  text: { sizings, common },
} = minimalTheme;

describe('textTheme selectors', () => {
  describe('getTextSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
      it('should return the correct size style object for a given size', () => {
        expect(getTextSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should throw if size is not defined in the theme', () => {
      expect(() => getTextSizingStyle(theme, 'invalidSizing')).toThrow();
    });
  });

  describe('getTextOpacity', () => {
    Object.keys(opacities).forEach(emphasis => {
      it('should return the correct opacity for a given emphasis', () => {
        expect(getTextOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
    });
    it('should throw if emphasis is not defined in the theme', () => {
      expect(() => getTextOpacity(theme, 'invalidEmphasis')).toThrow();
    });
  });

  describe('getTextColor', () => {
    Object.keys(colors).forEach(color => {
      it('should return the correct color', () => {
        expect(getTextColor(theme, color)).toEqual(colors[color]);
      });
    });

    it('should throw if color is not defined in the theme', () => {
      expect(() => getTextColor(theme, 'invalidColor')).toThrow();
    });
  });

  describe('getTextCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getTextCommonStyle(theme)).toEqual(common);
    });
  });
});
