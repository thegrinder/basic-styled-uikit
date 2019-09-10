import { typographyBaseTheme } from '../../typographyTheme';
import {
  getTextSizingStyle,
  getTextColor,
  getTextColorOnBg,
  getTextCommonStyle,
  getTextOpacity,
} from '../textSelectors';

const theme = { typography: typographyBaseTheme };
const {
  opacities,
  colors,
  onBackground,
  text: { sizings, common },
} = typographyBaseTheme;

describe('textTheme selectors', () => {
  describe('getTextSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
      it(`should return the correct size style object for ${sizing} size`, () => {
        expect(getTextSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should throw if size is not defined in the theme', () => {
      expect(() => getTextSizingStyle(theme, 'invalidSizing')).toThrow();
    });
  });

  describe('getTextOpacity', () => {
    Object.keys(opacities).forEach(emphasis => {
      it(`should return the correct opacity for ${emphasis} emphasis`, () => {
        expect(getTextOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
    });
    it('should throw if emphasis is not defined in the theme', () => {
      expect(() => getTextOpacity(theme, 'invalidEmphasis')).toThrow();
    });
  });

  describe('getTextColor', () => {
    Object.keys(colors).forEach(color => {
      it(`should return the correct ${color} color`, () => {
        expect(getTextColor(theme, color)).toEqual(colors[color]);
      });
    });

    it('should throw if color is not defined in the theme', () => {
      expect(() => getTextColor(theme, 'invalidColor')).toThrow();
    });
  });

  describe('getTextColorOnBg', () => {
    it('should default to the main text color theme if no corresponding background is found', () => {
      expect(getTextColorOnBg(theme, 'noop', 'primary')).toEqual(
        colors.primary
      );
    });

    Object.keys(onBackground).forEach(bgColor => {
      Object.keys(onBackground[bgColor]).forEach(color => {
        it(`should return the correct code for ${color} color for ${bgColor} background`, () => {
          expect(getTextColorOnBg(theme, bgColor, color)).toEqual(
            bgColor === 'warning' ? '#161616' : '#fff'
          );
        });
      });
    });
  });

  describe('getTextCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getTextCommonStyle(theme)).toEqual(common);
    });
  });
});
