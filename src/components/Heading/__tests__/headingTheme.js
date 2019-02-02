import theme from '../../../theme/theme';
import headingTheme, {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
} from '../headingTheme';

const {
  sizings,
  colors,
  common,
} = headingTheme;

describe('headingTheme selectors', () => {
  describe('getHeadingSizingStyle', () => {
    Object.keys(sizings).forEach((sizing) => {
      it('should return the correct size style object', () => {
        expect(JSON.stringify(getHeadingSizingStyle(theme, sizing)))
          .toEqual(JSON.stringify(sizings[sizing]));
      });
    });
  });
  describe('getHeadingColor', () => {
    Object.keys(colors).forEach((color) => {
      it('should return the correct color', () => {
        expect(getHeadingColor(theme, color)).toEqual(colors[color]);
      });
    });
  });

  describe('getHeadingCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(JSON.stringify(getHeadingCommonStyle(theme)))
        .toEqual(JSON.stringify(common));
    });
  });
});
