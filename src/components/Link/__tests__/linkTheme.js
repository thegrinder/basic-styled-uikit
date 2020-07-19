import linkTheme from '../linkTheme';

describe('linkTheme', () => {
  it('should be defined', () => {
    expect(linkTheme).toBeDefined();
    expect(linkTheme).toMatchSnapshot();
  });
});
