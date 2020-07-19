import textTheme from '../textTheme';

describe('textTheme', () => {
  it('should be defined', () => {
    expect(textTheme).toBeDefined();
    expect(textTheme).toMatchSnapshot();
  });
});
