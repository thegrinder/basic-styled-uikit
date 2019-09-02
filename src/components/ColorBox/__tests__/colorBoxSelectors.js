import theme from '../../../theme/theme';
import colorBoxTheme from '../colorBoxTheme';
import { getBoxBgColor, getBoxElevation } from '../colorBoxSelectors';

const { bgColors, elevations } = colorBoxTheme;
const { mode } = theme.uiKit;

describe('colorBoxTheme selectors', () => {
  describe('getBoxBgColor', () => {
    Object.keys(bgColors[mode]).forEach(bgColor => {
      it('should return the correct background color', () => {
        expect(getBoxBgColor(theme, bgColor)).toEqual(bgColors[mode][bgColor]);
      });
    });
  });

  describe('getBoxElevation', () => {
    Object.keys(elevations[mode]).forEach(elevation => {
      it('should return the correct background color', () => {
        expect(getBoxElevation(theme, elevation)).toEqual(
          elevations[mode][elevation]
        );
      });
    });
  });
});
