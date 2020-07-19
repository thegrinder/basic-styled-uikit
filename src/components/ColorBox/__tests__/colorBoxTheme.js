import colorBox from '../colorBoxTheme';

describe('colorBox', () => {
  it('should be defined', () => {
    expect(colorBox).toBeDefined();
    expect(colorBox).toMatchSnapshot();
  });
});
