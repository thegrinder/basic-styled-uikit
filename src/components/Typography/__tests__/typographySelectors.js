import {
  getTypography,
  getBaseFontSize,
  getBaseLineHeight,
  rem,
  calcLineHeight,
} from '../typographySelectors';

export const typographyTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
};

const theme = {
  typography: typographyTheme,
};

describe('typographySelectors', () => {
  describe('getTypography', () => {
    it('should return typography theme', () => {
      expect(getTypography(theme)).toEqual(typographyTheme);
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
      expect(calcLineHeight('1rem')({ theme })).toEqual('1.5');
      expect(calcLineHeight('2rem')({ theme })).toEqual('1.5');
      expect(calcLineHeight('3rem')({ theme })).toEqual('1');
    });
  });
});
