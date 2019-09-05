import theme from '../../../theme/theme';
import linkTheme from '../linkTheme';
import { getLinkTypeStyle, getLinkCommonStyle } from '../linkSelectors';

const { linkTypes, common } = linkTheme;
const { mode } = theme.uiKit;

describe('linkTheme selectors', () => {
  describe('getLinkTypeStyle', () => {
    Object.keys(linkTypes[mode]).forEach(linkType => {
      Object.keys(linkTypes[mode][linkType]).forEach(state => {
        it(`should return the correct style object for ${linkType} link type and ${state} state`, () => {
          expect(getLinkTypeStyle(theme, linkType, state)).toEqual(
            linkTypes[mode][linkType][state]
          );
        });
      });
    });

    it('should throw if link type is not defined in the theme', () => {
      expect(() =>
        getLinkTypeStyle(theme, 'invalidLinkType', 'normal')
      ).toThrow();
    });

    it('should throw if link state is not defined in the theme', () => {
      expect(() => getLinkTypeStyle(theme, 'muted', 'invalidState')).toThrow();
    });
  });

  describe('getLinkCommonStyle', () => {
    it('should return the correct common style object', () => {
      expect(getLinkCommonStyle(theme)).toEqual(common);
    });
  });
});
