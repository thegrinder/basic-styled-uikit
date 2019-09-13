import { minimalTheme } from '../TypographyProvider';
import {
  getTypography,
  getBaseFontSize,
  getBaseLineHeight,
  rem,
  calcLineHeight,
} from '../typographySelectors';

const theme = { typography: minimalTheme };

describe('typographySelectors', () => {
  describe('getTypography', () => {
    it('should return typography theme', () => {
      expect(getTypography(theme)).toEqual(minimalTheme);
    });

    it('should throw if no theme found', () => {
      expect(() => getTypography()).toThrow();
    });

    it('should throw if no typography namespace found', () => {
      expect(() => getTypography({})).toThrow();
    });
  });

  describe('getBaseFontSize', () => {
    it('should return the correct base font size', () => {
      expect(getBaseFontSize(theme)).toEqual(theme.typography.baseFontSize);
    });
  });

  describe('getBaseLineHeight', () => {
    it('should return the correct base line height', () => {
      expect(getBaseLineHeight(theme)).toEqual(theme.typography.baseLineHeight);
    });
  });

  describe('rem', () => {
    it('should return the correct size in rem units with a default theme', () => {
      expect(rem(16)({ theme })).toEqual('1rem');
    });

    it('should return the correct size in rem units with a custom theme', () => {
      const customTheme = {
        ...theme,
        typography: {
          ...theme.typography,
          baseFontSize: 8,
        },
      };
      expect(rem(16)({ theme: customTheme })).toEqual('2rem');
    });
  });

  describe('calcLineHeight', () => {
    it('should return the correct line height according to vertical rhythm and base line height', () => {
      expect(calcLineHeight('1rem', 1.5)).toEqual('1.5');
      expect(calcLineHeight('2rem', 1.5)).toEqual('1.5');
      expect(calcLineHeight('3rem', 1.5)).toEqual('1');
    });
  });
});
