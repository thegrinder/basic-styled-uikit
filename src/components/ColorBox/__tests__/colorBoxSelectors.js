import theme from '../../../theme/theme';
import colorBoxTheme from '../colorBoxTheme';
import { getBoxBgColor, getBoxElevation } from '../colorBoxSelectors';

const { bgColors, elevations } = colorBoxTheme;

describe('colorBoxTheme selectors', () => {
  describe('getBoxBgColor', () => {
    Object.keys(bgColors).forEach(bgColor => {
      it('should return the correct background color', () => {
        expect(getBoxBgColor(theme, bgColor)).toEqual(bgColors[bgColor]);
      });
    });
  });

  describe('getBoxElevation', () => {
    Object.keys(elevations).forEach(elevation => {
      it('should return the correct background color', () => {
        expect(getBoxElevation(theme, elevation)).toEqual(
          elevations[elevation]
        );
      });
    });
  });
});
