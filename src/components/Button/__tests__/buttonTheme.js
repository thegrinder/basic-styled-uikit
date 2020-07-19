import buttonTheme from '../buttonTheme';

describe('buttonTheme', () => {
  it('should be defined', () => {
    expect(buttonTheme).toBeDefined();
    expect(buttonTheme).toMatchSnapshot();
  });
});
