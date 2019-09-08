import theme from '../../../theme/theme';
import formTheme from '../formTheme';
import {
  getRegularInputStyle,
  getRegularInputCommonStyle,
  getMiscInputStyle,
  getMiscInputCommonStyle,
  getInlineInputStyle,
  getInlineInputCommonStyle,
  getToggleStyle,
} from '../formSelectors';

const { regular, inline, misc, toggle } = formTheme;
const { mode } = theme;

describe('formTheme selectors', () => {
  describe('getRegularInputStyle', () => {
    Object.keys(regular[mode].states.valid).forEach(state => {
      it(`should return the correct style object for regular input in ${state} state`, () => {
        expect(getRegularInputStyle(theme, false, state)).toEqual(
          regular[mode].states.valid[state]
        );
      });
    });

    it('should return the correct style object for regular input in invalid state', () => {
      expect(getRegularInputStyle(theme, true)).toEqual(
        regular[mode].states.invalid
      );
    });
  });

  describe('getRegularInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getRegularInputCommonStyle(theme)).toEqual(regular.common);
    });
  });

  describe('getInlineInputStyle', () => {
    Object.keys(inline[mode].states.valid).forEach(state => {
      it(`should return the correct style object for inline input ${state} state`, () => {
        expect(getInlineInputStyle(theme, false, state)).toEqual(
          inline[mode].states.valid[state]
        );
      });
    });

    it('should return the correct style object for inline input in invalid state', () => {
      expect(getInlineInputStyle(theme, true)).toEqual(
        inline[mode].states.invalid
      );
    });
  });

  describe('getInlineInputCommonStyle', () => {
    it('should return the correct common style object for inline input', () => {
      expect(getInlineInputCommonStyle(theme)).toEqual(inline.common);
    });
  });

  describe('getMiscInputStyle', () => {
    Object.keys(misc[mode].states.valid).forEach(state => {
      it(`should return the correct style object for misc input in ${state} state`, () => {
        expect(getMiscInputStyle(theme, false, state)).toEqual(
          misc[mode].states.valid[state]
        );
      });
    });

    it('should return the correct style object for misc input in invalid state', () => {
      expect(getMiscInputStyle(theme, true, 'normal')).toEqual(
        misc[mode].states.invalid
      );
    });
  });

  describe('getMiscInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getMiscInputCommonStyle(theme)).toEqual(misc.common);
    });
  });

  describe('getToggleStyle', () => {
    Object.keys(toggle[mode].states).forEach(state => {
      it('should return the correct style object for different states', () => {
        expect(getToggleStyle(theme, state)).toEqual(
          toggle[mode].states[state]
        );
      });
    });
  });
});
