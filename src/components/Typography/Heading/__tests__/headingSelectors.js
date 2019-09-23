import {
  getHeadingSizingStyle,
  getHeadingColor,
  getHeadingCommonStyle,
  getHeadingOpacity,
} from '../headingSelectors';

export const typographyTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
  opacities: {
    high: 1,
  },
  colors: {
    neutral: '#000',
  },
  heading: {
    sizings: {
      h1: {
        fontSize: '3rem',
      },
      h2: {
        fontSize: '2.5rem',
      },
      h3: {
        fontSize: '2rem',
      },
      h4: {
        fontSize: '1.5rem',
      },
      h5: {
        fontSize: '1.25rem',
      },
      h6: {
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
  heading: { sizings, common },
} = typographyTheme;

describe('headingTheme selectors', () => {
  describe('getHeadingSizingStyle', () => {
    Object.keys(sizings).forEach(sizing => {
      it(`should return the correct size style object for ${sizing} size`, () => {
        expect(getHeadingSizingStyle(theme, sizing)).toEqual(sizings[sizing]);
      });
    });

    it('should return undefined if size is not defined in the theme', () => {
      expect(getHeadingSizingStyle(theme, 'invalidSizing')).toEqual(undefined);
    });
  });

  describe('getHeadingOpacity', () => {
    Object.keys(opacities).forEach(emphasis => {
      it(`should return the correct opacity for ${emphasis} emphasis`, () => {
        expect(getHeadingOpacity(theme, emphasis)).toEqual(opacities[emphasis]);
      });
    });

    it('should return undefined if emphasis is not defined in the theme', () => {
      expect(getHeadingOpacity(theme, 'invalidEmphasis')).toEqual(undefined);
    });
  });

  describe('getHeadingColor', () => {
    Object.keys(colors).forEach(color => {
      it(`should return the correct ${color} color`, () => {
        expect(getHeadingColor(theme, color)).toEqual(colors[color]);
      });
    });

    it('should throw if color is not defined in the theme', () => {
      expect(getHeadingColor(theme, 'invalidColor')).toEqual(undefined);
    });
  });

  describe('getHeadingCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getHeadingCommonStyle(theme)).toEqual(common);
    });
  });
});
