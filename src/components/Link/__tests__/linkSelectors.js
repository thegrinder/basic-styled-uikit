import theme from '../../../theme/theme';
import linkTheme from '../linkTheme';
import { getLinkTypeStyle, getLinkCommonStyle } from '../linkSelectors';

const { linkTypes, common } = linkTheme;
const { mode } = theme;

describe('linkTheme selectors', () => {
  describe('getLinkTypeStyle', () => {
    Object.keys(linkTypes).forEach(linkType => {
      Object.keys(linkTypes[linkType][mode]).forEach(state => {
        it(`should return the correct style object for ${linkType} link type and ${state} state`, () => {
          expect(getLinkTypeStyle(theme, linkType, state)).toEqual(
            linkTypes[linkType][mode][state]
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
