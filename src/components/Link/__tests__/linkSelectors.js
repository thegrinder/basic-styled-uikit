import { linkBaseTheme } from '../linkTheme';
import {
  getLink,
  getLinkTypeStyle,
  getLinkCommonStyle,
} from '../linkSelectors';

const { linkTypes, common } = linkBaseTheme;
const theme = { link: linkBaseTheme };

describe('linkTheme selectors', () => {
  describe('getLink', () => {
    it('should return link theme', () => {
      expect(getLink(theme)).toEqual(linkBaseTheme);
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
        it(`should return the correct style object for ${linkType} link type and ${state} state`, () => {
          expect(getLinkTypeStyle(theme, linkType, state)).toEqual(
            linkTypes[linkType][state]
          );
        });
      });
    });

    it('should throw if link type is not defined in the theme', () => {
      expect(() =>
        getLinkTypeStyle(theme, 'invalidLinkType', 'normal')
      ).toThrow();
    });
  });

  describe('getLinkCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getLinkCommonStyle(theme)).toEqual(common);
    });
  });
});
