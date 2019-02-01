import theme from '../../../theme/theme';
import textTheme, {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
} from '../textTheme';

const {
  sizings,
  colors,
  common,
} = textTheme;

describe('textTheme selectors', () => {
  describe('getTextSizingStyle', () => {
    Object.keys(sizings).forEach((sizing) => {
      it('should return the correct size style object', () => {
        expect(JSON.stringify(getTextSizingStyle(theme, sizing)))
          .toEqual(JSON.stringify(sizings[sizing]));
      });
    });
  });
  describe('getTextColor', () => {
    Object.keys(colors).forEach((color) => {
      it('should return the correct color', () => {
        expect(getTextColor(theme, color)).toEqual(colors[color]);
      });
    });
  });

  describe('getTextCommonStyle', () => {
    it('should return the correct style object', () => {
      expect(JSON.stringify(getTextCommonStyle(theme)))
        .toEqual(JSON.stringify(common));
    });
  });
});
