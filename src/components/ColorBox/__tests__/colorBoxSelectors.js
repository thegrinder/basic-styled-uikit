import theme from '../../../theme/theme';
import colorBoxTheme from '../colorBoxTheme';
import { getBoxBgColor, getBoxElevation } from '../colorBoxSelectors';

const { bgColors, elevations } = colorBoxTheme;
const { mode } = theme;

describe('colorBoxTheme selectors', () => {
  describe('getBoxBgColor', () => {
    it.each(Object.keys(bgColors[mode]))(
      'should return the correct background color for %s',
      bgColor => {
        expect(getBoxBgColor(theme, bgColor)).toEqual(bgColors[mode][bgColor]);
      }
    );

    it('should throw if background color is not defined in the theme', () => {
      expect(() => getBoxBgColor(theme, 'invalidBgColor')).toThrow();
    });
  });

  describe('getBoxElevation', () => {
    it.each(Object.keys(elevations[mode]))(
      'should return the correct elevation for % value',
      elevation => {
        expect(getBoxElevation(theme, elevation)).toEqual(
          elevations[mode][elevation]
        );
      }
    );

    it('should throw if elevation is not defined in the theme', () => {
      expect(() => getBoxElevation(theme, 'invalidElevation')).toThrow();
    });
  });
});
