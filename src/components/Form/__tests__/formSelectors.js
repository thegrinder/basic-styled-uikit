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

const {
  regular,
  inline,
  misc,
  toggle,
} = formTheme;

describe('formTheme selectors', () => {
  describe('getRegularInputStyle', () => {
    Object.keys(regular.states.valid).forEach((state) => {
      it('should return the correct style object for different valid states', () => {
        expect(JSON.stringify(getRegularInputStyle(theme, false, state)))
          .toEqual(JSON.stringify(regular.states.valid[state]));
      });
    });

    it('should return the correct style object for invalid state', () => {
      expect(JSON.stringify(getRegularInputStyle(theme, true)))
        .toEqual(JSON.stringify(regular.states.invalid));
    });
  });

  describe('getRegularInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(JSON.stringify(getRegularInputCommonStyle(theme)))
        .toEqual(JSON.stringify(regular.common));
    });
  });

  describe('getInlineInputStyle', () => {
    Object.keys(inline.states.valid).forEach((state) => {
      it('should return the correct style object for different valid states', () => {
        expect(JSON.stringify(getInlineInputStyle(theme, false, state)))
          .toEqual(JSON.stringify(inline.states.valid[state]));
      });
    });

    it('should return the correct style object for invalid state', () => {
      expect(JSON.stringify(getInlineInputStyle(theme, true)))
        .toEqual(JSON.stringify(inline.states.invalid));
    });
  });

  describe('getInlineInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(JSON.stringify(getInlineInputCommonStyle(theme)))
        .toEqual(JSON.stringify(inline.common));
    });
  });

  describe('getMiscInputStyle', () => {
    Object.keys(misc.states.valid).forEach((state) => {
      it('should return the correct style object for different valid states', () => {
        expect(JSON.stringify(getMiscInputStyle(theme, false, state)))
          .toEqual(JSON.stringify(misc.states.valid[state]));
      });
    });

    it('should return the correct style object for invalid state', () => {
      expect(JSON.stringify(getMiscInputStyle(theme, true, 'normal')))
        .toEqual(JSON.stringify(misc.states.invalid));
    });
  });

  describe('getMiscInputCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(JSON.stringify(getMiscInputCommonStyle(theme)))
        .toEqual(JSON.stringify(misc.common));
    });
  });

  describe('getToggleStyle', () => {
    Object.keys(toggle.states).forEach((state) => {
      it('should return the correct style object for different states', () => {
        expect(JSON.stringify(getToggleStyle(theme, state)))
          .toEqual(JSON.stringify(toggle.states[state]));
      });
    });
  });
});
