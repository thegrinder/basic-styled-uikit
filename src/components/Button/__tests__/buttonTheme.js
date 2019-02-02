import theme from '../../../theme/theme';
import buttonTheme, {
  getBtnTypeStyle,
  getBtnSizeStyle,
  getBtnCommonStyle,
} from '../buttonTheme';

const {
  btnTypes,
  btnSizes,
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

  describe('getBtnSizeStyle', () => {
    Object.keys(btnSizes).forEach((btnSize) => {
      it('should return the correct btnSize style object', () => {
        expect(JSON.stringify(getBtnSizeStyle(theme, btnSize)))
          .toEqual(JSON.stringify(btnSizes[btnSize]));
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
