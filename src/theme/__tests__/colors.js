import theme from '../theme';
import colors, { getColor } from '../colors';

describe('colors', () => {
  it('should be defined', () => {
    expect(colors).toBeDefined();
    expect(colors).toMatchSnapshot();
  });
});

describe('getColor', () => {
  it('should return the right color', () => {
    expect(getColor('primary600')({ theme })).toEqual(colors.primary600);
  });
});
