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

describe('textTheme selectors', () => {
  describe('getTextSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
      it('should return the correct size style object', () => {
        expect(getTextSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should return empty object if sizing is invalid', () => {
      expect(getTextSizingStyle(theme, 'invalidSizing')).toEqual({});
    });
  });

  describe('getTextOpacity', () => {
    Object.keys(opacities).forEach(emphasis => {
      it('should return the correct opacity', () => {
        expect(getTextOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
    });
  });

  describe('getTextColor', () => {
    Object.keys(colors).forEach(color => {
      it('should return the correct color', () => {
        expect(getTextColor(theme, color)).toEqual(colors[color]);
      });
    });
  });

  describe('getTextColorOnBg', () => {
    it('should default to the main text color theme if no corresponding background found', () => {
      expect(getTextColorOnBg(theme, 'noop', 'primary')).toEqual(
        colors.primary
      );
    });

    Object.keys(onBackground).forEach(bgColor => {
      Object.keys(onBackground[bgColor]).forEach(color => {
        it('should return the correct color', () => {
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
