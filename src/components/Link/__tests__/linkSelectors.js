import theme from '../../../theme/theme';
import linkTheme from '../linkTheme';
import { getLinkTypeStyle, getLinkCommonStyle } from '../linkSelectors';

const {
  linkTypes,
  common,
} = linkTheme;

describe('linkTheme selectors', () => {
  describe('getLinkTypeStyle', () => {
    Object.keys(linkTypes).forEach((linkType) => {
      Object.keys(linkTypes[linkType]).forEach((state) => {
        it('should return the correct linkType style object', () => {
          expect(getLinkTypeStyle(theme, linkType, state)).toEqual(linkTypes[linkType][state]);
        });
      });
    });

    it('should return empty object if linkType is invalid', () => {
      expect(getLinkTypeStyle(theme, 'invalidLinkType', 'normal')).toEqual({});
    });
  });

  describe('getLinkCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getLinkCommonStyle(theme)).toEqual(common);
    });
  });
});
