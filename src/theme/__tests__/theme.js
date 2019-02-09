import theme from '../theme';

describe('theme', () => {
  it('should be defined', () => {
    expect(theme).toBeDefined();
    expect(theme).toMatchSnapshot();
  });
});
