import { typographyBaseTheme } from '../typographyTheme';
import {
  getBaseFontSize,
  getBaseLineHeight,
  rem,
  calcLineHeight,
} from '../typographySelectors';

const theme = { typography: typographyBaseTheme };

describe('typography', () => {
  describe('theme', () => {
    it('should be defined', () => {
      expect(typographyBaseTheme).toBeDefined();
      expect(typographyBaseTheme).toMatchSnapshot();
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