import colors from '../colorsTheme';

describe('colorsTheme', () => {
  it('should be defined', () => {
    expect(colors).toBeDefined();
    expect(colors).toMatchSnapshot();
  });
});
