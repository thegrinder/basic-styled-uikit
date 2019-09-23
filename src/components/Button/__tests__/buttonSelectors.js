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

    it('should return undefined if the btnType is invalid ', () => {
      expect(getBtnTypeStyle(theme, 'invalidBtnType', 'normal')).toEqual(
        undefined
      );
    });
  });

  describe('getBtnSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
      it('should return the correct sizing style object', () => {
        expect(getBtnSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should return empty object if sizing is invalid', () => {
      expect(getBtnSizingStyle(theme, 'invalidSizing')).toEqual(undefined);
    });
  });

  describe('getBtnCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getBtnCommonStyle(theme)).toEqual(common);
    });
  });
});
