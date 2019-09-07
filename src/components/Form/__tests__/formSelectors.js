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
const { mode } = theme.uiKit;

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
    Object.keys(inline.states.valid).forEach(state => {
      it('should return the correct style object for different valid states', () => {
        expect(getInlineInputStyle(theme, false, state)).toEqual(
          inline.states.valid[state]
        );
      });
    });

    it('should return the correct style object for invalid state', () => {
      expect(getInlineInputStyle(theme, true)).toEqual(inline.states.invalid);
    });
  });

  describe('getInlineInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getInlineInputCommonStyle(theme)).toEqual(inline.common);
    });
  });

  describe('getMiscInputStyle', () => {
    Object.keys(misc.states.valid).forEach(state => {
      it('should return the correct style object for different valid states', () => {
        expect(getMiscInputStyle(theme, false, state)).toEqual(
          misc.states.valid[state]
        );
      });
    });

    it('should return the correct style object for invalid state', () => {
      expect(getMiscInputStyle(theme, true, 'normal')).toEqual(
        misc.states.invalid
      );
    });
  });

  describe('getMiscInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getMiscInputCommonStyle(theme)).toEqual(misc.common);
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
