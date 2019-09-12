import {
  getButton,
  getBtnTypeStyle,
  getBtnSizingStyle,
  getBtnCommonStyle,
} from '../buttonSelectors';

const buttonTheme = {
  btnTypes: {
    primary: {
      normal: {
        color: '#fff',
        backgroundColor: '#000',
      },
    },
  },
  sizings: {
    m: {
      fontSize: '1rem',
    },
  },
  common: {
    fontWeight: 'bold',
  },
};

const theme = {
  button: buttonTheme,
};
const { btnTypes, sizings, common } = buttonTheme;

describe('buttonTheme selectors', () => {
  describe('getButton', () => {
    it('should return button theme', () => {
      expect(getButton(theme)).toEqual(buttonTheme);
    });

    it('should throw if no theme found', () => {
      expect(() => getButton()).toThrow();
    });

    it('should throw if no button namespace found', () => {
      expect(() => getButton({})).toThrow();
    });
  });

  describe('getBtnTypeStyle', () => {
    Object.keys(btnTypes).forEach(btnType => {
      Object.keys(btnTypes[btnType]).forEach(state => {
        it(`should return the correct style object for specific button type in ${state} state`, () => {
          expect(getBtnTypeStyle(theme, btnType, state)).toEqual(
            btnTypes[btnType][state]
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
