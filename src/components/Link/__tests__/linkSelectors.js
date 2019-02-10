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
      Object.keys(linkType).forEach((state) => {
        it('should return the correct linkType style object', () => {
          expect(getLinkTypeStyle(theme, linkType, state)).toEqual(linkTypes[linkType][state]);
        });
      });
    });
  });

  describe('getLinkCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getLinkCommonStyle(theme)).toEqual(common);
    });
  });
});
