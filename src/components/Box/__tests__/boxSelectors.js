import { boxBaseTheme } from '../boxTheme';
import { getBox, getBoxBgColor, getBoxElevation } from '../boxSelectors';

const theme = { box: boxBaseTheme };
const { bgColors, elevations } = boxBaseTheme;

describe('boxTheme selectors', () => {
  describe('getBox', () => {
    it('should return button theme', () => {
      expect(getBox(theme)).toEqual(boxBaseTheme);
    });

    it('should throw if no theme found', () => {
      expect(() => getBox()).toThrow();
    });

    it('should throw if no button namespace found', () => {
      expect(() => getBox({})).toThrow();
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
