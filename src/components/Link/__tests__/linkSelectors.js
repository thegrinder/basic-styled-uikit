import {
  getLink,
  getLinkTypeStyle,
  getLinkCommonStyle,
} from '../linkSelectors';

const linkTheme = {
  linkTypes: {
    default: {
      normal: {
        color: '#1e88e5',
      },
    },
  },
  common: {
    fontFamily: 'sans-serif',
  },
};

const { linkTypes, common } = linkTheme;
const theme = { link: linkTheme };

describe('linkTheme selectors', () => {
  describe('getLink', () => {
    it('should return link theme', () => {
      expect(getLink(theme)).toEqual(linkTheme);
    });

    it('should throw if no theme found', () => {
      expect(() => getLink()).toThrow();
    });

    it('should throw if no link namespace found', () => {
      expect(() => getLink({})).toThrow();
    });
  });

  describe('getLinkTypeStyle', () => {
    Object.keys(linkTypes).forEach(linkType => {
      Object.keys(linkTypes[linkType]).forEach(state => {
        it(`should return the correct style object for specific link type in ${state} state`, () => {
          expect(getLinkTypeStyle(theme, linkType, state)).toEqual(
            linkTypes[linkType][state]
          );
        });
      });
    });

    it('should return undefined if link type is not defined in the theme', () => {
      expect(getLinkTypeStyle(theme, 'invalidLinkType', 'normal')).toEqual(
        undefined
      );
    });
  });

  describe('getLinkCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getLinkCommonStyle(theme)).toEqual(common);
    });
  });
});
