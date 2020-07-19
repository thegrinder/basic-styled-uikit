import formTheme from '../formTheme';

describe('formTheme', () => {
  it('should be defined', () => {
    expect(formTheme).toBeDefined();
    expect(formTheme).toMatchSnapshot();
  });
});
