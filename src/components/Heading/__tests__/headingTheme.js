import headingTheme from '../headingTheme';

describe('headingTheme', () => {
  it('should be defined', () => {
    expect(headingTheme).toBeDefined();
    expect(headingTheme).toMatchSnapshot();
  });
});
