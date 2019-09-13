import { minimalTheme } from '../../TypographyProvider';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
  getHeadingOpacity,
} from '../headingSelectors';

const theme = {
  typography: minimalTheme,
};
const {
  opacities,
  colors,
  heading: { sizings, common },
} = minimalTheme;

describe('headingTheme selectors', () => {
  describe('getHeadingSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
      it(`should return the correct size style object for ${sizing} size`, () => {
        expect(getHeadingSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should throw if size is not defined in the theme', () => {
      expect(() => getHeadingSizingStyle(theme, 'invalidSizing')).toThrow();
    });
  });

  describe('getHeadingOpacity', () => {
    Object.keys(opacities).forEach(emphasis => {
      it(`should return the correct opacity for ${emphasis} emphasis`, () => {
        expect(getHeadingOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
    });

    it('should throw if emphasis is not defined in the theme', () => {
      expect(() => getHeadingOpacity(theme, 'invalidEmphasis')).toThrow();
    });
  });

  describe('getHeadingColor', () => {
    Object.keys(colors).forEach(color => {
      it(`should return the correct ${color} color`, () => {
        expect(getHeadingColor(theme, color)).toEqual(colors[color]);
      });
    });

    it('should throw if color is not defined in the theme', () => {
      expect(() => getHeadingColor(theme, 'invalidColor')).toThrow();
    });
  });

  describe('getHeadingCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getHeadingCommonStyle(theme)).toEqual(common);
    });
  });
});
