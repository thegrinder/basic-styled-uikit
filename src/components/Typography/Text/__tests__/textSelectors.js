import {
  getTextSizingStyle,
  getTextColor,
  getTextCommonStyle,
  getTextOpacity,
} from '../textSelectors';

export const typographyTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
  opacities: {
    high: 1,
  },
  colors: {
    neutral: '#000',
  },
  text: {
    sizings: {
      m: {
        fontSize: '1rem',
      },
    },
  },
};

const theme = {
  typography: typographyTheme,
};

const {
  opacities,
  colors,
  text: { sizings, common },
} = typographyTheme;

describe('textTheme selectors', () => {
  describe('getTextSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
      it('should return the correct size style object for a given size', () => {
        expect(getTextSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should return undefined if size is not defined in the theme', () => {
      expect(getTextSizingStyle(theme, 'invalidSizing')).toEqual(undefined);
    });
  });

  describe('getTextOpacity', () => {
    Object.keys(opacities).forEach(emphasis => {
      it('should return the correct opacity for a given emphasis', () => {
        expect(getTextOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
    });
    it('should return undefined if emphasis is not defined in the theme', () => {
      expect(getTextOpacity(theme, 'invalidEmphasis')).toEqual(undefined);
    });
  });

  describe('getTextColor', () => {
    Object.keys(colors).forEach(color => {
      it('should return the correct color', () => {
        expect(getTextColor(theme, color)).toEqual(colors[color]);
      });
    });

    it('should return undefined if color is not defined in the theme', () => {
      expect(getTextColor(theme, 'invalidColor')).toEqual(undefined);
    });
  });

  describe('getTextCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getTextCommonStyle(theme)).toEqual(common);
    });
  });
});
