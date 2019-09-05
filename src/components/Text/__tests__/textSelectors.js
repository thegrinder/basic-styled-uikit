import theme from '../../../theme/theme';
import colorPalette from '../../../theme/colors';
import textTheme from '../textTheme';
import {
  getTextSizingStyle,
  getTextColor,
  getTextColorOnBg,
  getTextCommonStyle,
  getTextOpacity,
} from '../textSelectors';

const { sizings, opacities, colors, common, onBackground } = textTheme;
const { mode } = theme.uiKit;

describe('textTheme selectors', () => {
  describe('getTextSizingStyle', () => {
    it.each(Object.keys(sizings))(
      'should return the correct size style object for %s size',
      sizing => {
        expect(getTextSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      }
    );

    it('should throw if size is not defined in the theme', () => {
      expect(() => getTextSizingStyle(theme, 'invalidSizing')).toThrow();
    });
  });

  describe('getTextOpacity', () => {
    it.each(Object.keys(opacities))(
      'should return the correct opacity for %s emphasis',
      emphasis => {
        expect(getTextOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      }
    );

    it('should throw if emphasis is not defined in the theme', () => {
      expect(() => getTextOpacity(theme, 'invalidEmphasis')).toThrow();
    });
  });

  describe('getTextColor', () => {
    it.each(Object.keys(colors[mode]))(
      'should return the correct color for %s',
      color => {
        expect(getTextColor(theme, color)).toEqual(colors[mode][color]);
      }
    );

    it('should throw if color is not defined in the theme', () => {
      expect(() => getTextColor(theme, 'invalidColor')).toThrow();
    });
  });

  describe('getTextColorOnBg', () => {
    it('should default to the main text color theme if no corresponding background is found', () => {
      expect(getTextColorOnBg(theme, 'noop', 'primary')).toEqual(
        colors[mode].primary
      );
    });

    Object.keys(onBackground[mode]).forEach(bgColor => {
      Object.keys(onBackground[mode][bgColor]).forEach(color => {
        it(`should return the correct code for ${color} color for ${bgColor} background`, () => {
          expect(getTextColorOnBg(theme, bgColor, color)).toEqual(
            colorPalette.neutral0
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
