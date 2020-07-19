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
      Object.keys(btnTypes[btnType]).forEach((state) => {
        it('should return the correct btnType style object', () => {
          expect(getBtnTypeStyle(theme, btnType, state)).toEqual(btnTypes[btnType][state]);
        });
      });
    });

    it('should return empty object if btnType is invalid', () => {
      expect(getBtnTypeStyle(theme, 'invalidBtnType', 'normal')).toEqual({});
    });
  });

  describe('getBtnSizingStyle', () => {
    Object.keys(sizings).forEach((sizing) => {
      it('should return the correct sizing style object', () => {
        expect(getBtnSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should return empty object if sizing is invalid', () => {
      expect(getBtnSizingStyle(theme, 'invalidSizing')).toEqual({});
    });
  });

  describe('getBtnCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getBtnCommonStyle(theme)).toEqual(common);
    });
  });
});
