import { colorBoxBaseTheme } from '../colorBoxTheme';
import {
  getColorBox,
  getBoxBgColor,
  getBoxElevation,
} from '../colorBoxSelectors';

const theme = { colorBox: colorBoxBaseTheme };
const { bgColors, elevations } = colorBoxBaseTheme;

describe('colorBoxTheme selectors', () => {
  describe('getColorBox', () => {
    it('should return button theme', () => {
      expect(getColorBox(theme)).toEqual(colorBoxBaseTheme);
    });

    it('should throw if no theme found', () => {
      expect(() => getColorBox()).toThrow();
    });

    it('should throw if no button namespace found', () => {
      expect(() => getColorBox({})).toThrow();
    });
  });

  describe('getBoxBgColor', () => {
    Object.keys(bgColors).forEach(bgColor => {
      it(`should return the correct ${bgColor} background color`, () => {
        expect(getBoxBgColor(theme, bgColor)).toEqual(bgColors[bgColor]);
      });
    });

    it('should throw if background color is not defined in the theme', () => {
      expect(() => getBoxBgColor(theme, 'invalidBgColor')).toThrow();
    });
  });

  describe('getBoxElevation', () => {
    Object.keys(elevations).forEach(elevation => {
      it(`should return the correct elevation for ${elevation} elevation`, () => {
        expect(getBoxElevation(theme, elevation)).toEqual(
          elevations[elevation]
        );
      });
    });

    it('should throw if elevation is not defined in the theme', () => {
      expect(() => getBoxElevation(theme, 'invalidElevation')).toThrow();
    });
  });
});
