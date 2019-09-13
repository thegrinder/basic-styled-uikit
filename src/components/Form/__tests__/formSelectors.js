import { minimalTheme } from '../FormProvider';
import {
  getForm,
  getRegularInputStyle,
  getRegularInputCommonStyle,
  getMiscInputStyle,
  getMiscInputCommonStyle,
  getInlineInputStyle,
  getInlineInputCommonStyle,
  getToggleStyle,
} from '../formSelectors';

const theme = { form: minimalTheme };
const { regular, inline, misc, toggle } = minimalTheme;

describe('formTheme selectors', () => {
  describe('getForm', () => {
    it('should return button theme', () => {
      expect(getForm(theme)).toEqual(minimalTheme);
    });

    it('should throw if no theme found', () => {
      expect(() => getForm()).toThrow();
    });

    it('should throw if no button namespace found', () => {
      expect(() => getForm({})).toThrow();
    });
  });

  describe('getRegularInputStyle', () => {
    Object.keys(regular.states.valid).forEach(state => {
      it(`should return the correct style object for regular input in ${state} state`, () => {
        expect(getRegularInputStyle(theme, false, state)).toEqual(
          regular.states.valid[state]
        );
      });
    });

    it('should return the correct style object for regular input in invalid state', () => {
      expect(getRegularInputStyle(theme, true)).toEqual(regular.states.invalid);
    });
  });

  describe('getRegularInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getRegularInputCommonStyle(theme)).toEqual(undefined);
    });
  });

  describe('getInlineInputStyle', () => {
    Object.keys(inline.states.valid).forEach(state => {
      it(`should return the correct style object for inline input ${state} state`, () => {
        expect(getInlineInputStyle(theme, false, state)).toEqual(
          inline.states.valid[state]
        );
      });
    });

    it('should return the correct style object for inline input in invalid state', () => {
      expect(getInlineInputStyle(theme, true)).toEqual(inline.states.invalid);
    });
  });

  describe('getInlineInputCommonStyle', () => {
    it('should return the correct common style object for inline input', () => {
      expect(getInlineInputCommonStyle(theme)).toEqual(undefined);
    });
  });

  describe('getMiscInputStyle', () => {
    Object.keys(misc.states.valid).forEach(state => {
      it(`should return the correct style object for misc input in ${state} state`, () => {
        expect(getMiscInputStyle(theme, false, state)).toEqual(
          misc.states.valid[state]
        );
      });
    });

    it('should return the correct style object for misc input in invalid state', () => {
      expect(getMiscInputStyle(theme, true, 'normal')).toEqual(
        misc.states.invalid
      );
    });
  });

  describe('getMiscInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getMiscInputCommonStyle(theme)).toEqual(undefined);
    });
  });

  describe('getToggleStyle', () => {
    Object.keys(toggle.states).forEach(state => {
      it('should return the correct style object for different states', () => {
        expect(getToggleStyle(theme, state)).toEqual(toggle.states[state]);
      });
    });
  });
});
