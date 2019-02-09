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
          expect(JSON.stringify(getBtnTypeStyle(theme, btnType, state)))
            .toEqual(JSON.stringify(btnTypes[btnType][state]));
        });
      });
    });
  });

  describe('getBtnSizingStyle', () => {
    Object.keys(sizings).forEach((sizing) => {
      it('should return the correct sizing style object', () => {
        expect(JSON.stringify(getBtnSizingStyle(theme, sizing)))
          .toEqual(JSON.stringify(sizings[sizing]));
      });
    });
  });

  describe('getBtnCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(JSON.stringify(getBtnCommonStyle(theme)))
        .toEqual(JSON.stringify(common));
    });
  });
});
