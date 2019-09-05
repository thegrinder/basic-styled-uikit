import theme from '../../../theme/theme';
import colorPalette from '../../../theme/colors';
import headingTheme from '../headingTheme';
import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingColorOnBg,
  getHeadingCommonStyle,
  getHeadingOpacity,
} from '../headingSelectors';

const { sizings, opacities, colors, common, onBackground } = headingTheme;
const { mode } = theme.uiKit;

describe('headingTheme selectors', () => {
  describe('getHeadingSizingStyle', () => {
    it.each(Object.keys(sizings))(
      'should return the correct size style object for %s size',
      sizing => {
        expect(getHeadingSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      }
    );

    it('should throw if size is not defined in the theme', () => {
      expect(() => getHeadingSizingStyle(theme, 'invalidSizing')).toThrow();
    });
  });

  describe('getHeadingOpacity', () => {
    it.each(Object.keys(opacities))(
      'should return the correct opacity for %s emphasis',
      emphasis => {
        expect(getHeadingOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      }
    );

    it('should throw if emphasis is not defined in the theme', () => {
      expect(() => getHeadingOpacity(theme, 'invalidEmphasis')).toThrow();
    });
  });

  describe('getHeadingColor', () => {
    it.each(Object.keys(colors[mode]))(
      'should return the correct color for %s',
      color => {
        expect(getHeadingColor(theme, color)).toEqual(colors[mode][color]);
      }
    );

    it('should throw if color is not defined in the theme', () => {
      expect(() => getHeadingColor(theme, 'invalidColor')).toThrow();
    });
  });

  describe('getHeadingColorOnBg', () => {
    it('should default to the main heading color theme if no corresponding background is found', () => {
      expect(getHeadingColorOnBg(theme, 'noop', 'primary')).toEqual(
        colors[mode].primary
      );
    });

    Object.keys(onBackground[mode]).forEach(bgColor => {
      it.each(Object.keys(onBackground[mode][bgColor]))(
        `should return the correct code for %s color for ${bgColor} background`,
        color => {
          expect(getHeadingColorOnBg(theme, bgColor, color)).toEqual(
            bgColor === 'warning'
              ? colorPalette.neutral1000
              : colorPalette.neutral0
          );
        }
      );
    });
  });

  describe('getHeadingCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getHeadingCommonStyle(theme)).toEqual(common);
    });
  });
});
