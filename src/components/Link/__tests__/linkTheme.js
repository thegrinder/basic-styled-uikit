import theme from '../../../theme/theme';
import linkTheme, {
  getLinkTypeStyle,
  getLinkCommonStyle,
} from '../linkTheme';

const {
  linkTypes,
  common,
} = linkTheme;

describe('linkTheme selectors', () => {
  describe('getLinkTypeStyle', () => {
    Object.keys(linkTypes).forEach((linkType) => {
      Object.keys(linkType).forEach((state) => {
        it('should return the correct size style object', () => {
          expect(JSON.stringify(getLinkTypeStyle(theme, linkType, state)))
            .toEqual(JSON.stringify(linkTypes[linkType][state]));
        });
      });
    });
  });

  describe('getLinkCommonStyle', () => {
    it('should return the correct style object', () => {
      expect(JSON.stringify(getLinkCommonStyle(theme)))
        .toEqual(JSON.stringify(common));
    });
  });
});
