import theme from '../theme';
import {
  getTypography,
  getColors,
  getButton,
  getForm,
  getHeading,
  getText,
  getColorBox,
  getLink,
} from '../themeSelectors';

describe('themeSelectors', () => {
  describe('getTypography', () => {
    expect(getTypography(theme)).toEqual(theme.uiKit.typography);
  });

  describe('getColors', () => {
    it('should get theme colors', () => {
      expect(getColors(theme)).toEqual(theme.uiKit.colors);
    });
  });

  describe('getButton', () => {
    it('should get button theme', () => {
      expect(getButton(theme)).toEqual(theme.uiKit.button);
    });
  });

  describe('getForm', () => {
    it('should get form theme', () => {
      expect(getForm(theme)).toEqual(theme.uiKit.form);
    });
  });

  describe('getHeading', () => {
    it('should get heading theme', () => {
      expect(getHeading(theme)).toEqual(theme.uiKit.heading);
    });
  });

  describe('getText', () => {
    it('should get text theme', () => {
      expect(getText(theme)).toEqual(theme.uiKit.text);
    });
  });

  describe('getColorBox', () => {
    it('should get color box theme', () => {
      expect(getColorBox(theme)).toEqual(theme.uiKit.colorBox);
    });
  });

  describe('getLink', () => {
    it('should get link theme', () => {
      expect(getLink(theme)).toEqual(theme.uiKit.link);
    });
  });
});
