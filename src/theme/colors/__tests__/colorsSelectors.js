import theme from '../../theme';
import colors from '../colorsTheme';
import { getColor } from '../colorsSelectors';

describe('getColor', () => {
  it('should return the right color', () => {
    expect(getColor('primary500')({ theme })).toEqual(colors.primary500);
  });
});
