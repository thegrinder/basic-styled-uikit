import { typographyBaseTheme } from '../../typographyTheme';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingColorOnBg,
  getHeadingCommonStyle,
  getHeadingOpacity,
} from '../headingSelectors';

const theme = { typography: typographyBaseTheme };
const {
  opacities,
  colors,
  onBackground,
  heading: { sizings, common },
} = typographyBaseTheme;

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

  describe('getHeadingColorOnBg', () => {
    it('should default to the main heading color theme if no corresponding background is found', () => {
      expect(getHeadingColorOnBg(theme, 'noop', 'primary')).toEqual(
        colors.primary
      );
    });

    Object.keys(onBackground).forEach(bgColor => {
      Object.keys(onBackground[bgColor]).forEach(color => {
        it(`should return the correct code for ${color} color for ${bgColor} background`, () => {
          expect(getHeadingColorOnBg(theme, bgColor, color)).toEqual(
            bgColor === 'warning' ? '#161616' : '#fff'
          );
        });
      });
    });
  });

  describe('getHeadingCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getHeadingCommonStyle(theme)).toEqual(common);
    });
  });
});
