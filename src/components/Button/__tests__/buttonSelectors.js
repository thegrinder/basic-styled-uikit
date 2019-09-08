import buttonTheme from '../buttonTheme';
import {
  getBtnTypeStyle,
  getBtnSizingStyle,
  getBtnCommonStyle,
} from '../buttonSelectors';

const mode = 'light';
const theme = {
  mode,
  button: buttonTheme,
};
const { btnTypes, sizings, common } = buttonTheme;

describe('buttonTheme selectors', () => {
  describe('getBtnTypeStyle', () => {
    Object.keys(btnTypes).forEach(btnType => {
      Object.keys(btnTypes[btnType][mode]).forEach(state => {
        it(`should return the correct style object for ${btnType} button type and ${state} state`, () => {
          expect(getBtnTypeStyle(theme, btnType, state)).toEqual(
            btnTypes[btnType][mode][state]
          );
        });
      });
    });

    it('should throw if button type is not defined in the theme', () => {
      expect(() =>
        getBtnTypeStyle(theme, 'invalidBtnType', 'normal')
      ).toThrow();
    });
  });

  describe('getBtnSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
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
