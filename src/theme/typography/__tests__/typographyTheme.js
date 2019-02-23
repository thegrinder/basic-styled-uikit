import typography from '../typographyTheme';

describe('typographyTheme', () => {
  it('should be defined', () => {
    expect(typography).toBeDefined();
    expect(typography).toMatchSnapshot();
  });
});
