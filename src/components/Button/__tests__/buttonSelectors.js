import theme from '../../../theme/theme';
import buttonTheme from '../buttonTheme';
import {
  getBtnTypeStyle,
  getBtnSizingStyle,
  getBtnCommonStyle,
} from '../buttonSelectors';

const {
  btnTypes,
  sizings,
  common,
} = buttonTheme;

describe('buttonTheme selectors', () => {
  describe('getBtnTypeStyle', () => {
    Object.keys(btnTypes).forEach((btnType) => {
      Object.keys(btnType).forEach((state) => {
        it('should return the correct btnType style object', () => {
          expect(getBtnTypeStyle(theme, btnType, state)).toEqual(btnTypes[btnType][state]);
        });
      });
    });
  });

  describe('getBtnSizingStyle', () => {
    Object.keys(sizings).forEach((sizing) => {
      it('should return the correct sizing style object', () => {
        expect(getBtnSizingStyle(theme, sizing))
          .toEqual(sizings[sizing]);
      });
    });
  });

  describe('getBtnCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getBtnCommonStyle(theme)).toEqual(common);
    });
  });
});
