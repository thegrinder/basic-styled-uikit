import theme from '../../../theme/theme';
import colorBoxTheme, {
  getBoxBgColor,
  getBoxBorderColor,
} from '../colorBoxTheme';

const { bgColors, borderColors } = colorBoxTheme;

describe('colorBoxTheme selectors', () => {
  describe('getBoxBgColor', () => {
    Object.keys(bgColors).forEach((bgColor) => {
      it('should return the correct background color', () => {
        expect(getBoxBgColor(theme, bgColor)).toEqual(bgColors[bgColor]);
      });
    });
  });

  describe('getBoxBgColor', () => {
    Object.keys(borderColors).forEach((borderColor) => {
      it('should return the correct background color', () => {
        expect(getBoxBorderColor(theme, borderColor))
          .toEqual(borderColors[borderColor]);
      });
    });
  });
});
