import { getBox, getBoxBgColor, getBoxElevation } from '../boxSelectors';

const boxTheme = {
  bgColors: {
    primary: '#1e88e5',
  },
  elevations: {
    1: {
      boxShadow:
        '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    },
  },
};

const theme = { box: boxTheme };
const { bgColors, elevations } = boxTheme;

describe('boxTheme selectors', () => {
  describe('getBox', () => {
    it('should return button theme', () => {
      expect(getBox(theme)).toEqual(boxTheme);
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
      it(`should return the correct background color`, () => {
        expect(getBoxBgColor(theme, bgColor)).toEqual(bgColors[bgColor]);
      });
    });

    it('should return undefined if background color is not defined in the theme', () => {
      expect(getBoxBgColor(theme, 'invalidBgColor')).toEqual(undefined);
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

    it('should return undefined if elevation is not defined in the theme', () => {
      expect(getBoxElevation(theme, 'invalidElevation')).toEqual(undefined);
    });
  });
});
