import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../../theme/theme';
import Input from '../Input';


const renderComponent = (props = {}) => render(
  <ThemeProvider theme={theme}>
    <Input {...props} />
  </ThemeProvider>,
);

describe('<Input />', () => {
  afterEach(cleanup);

  it('should render correctly with default props', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const { container: { firstChild } } = renderComponent({
      invalid: true,
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <input> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('INPUT');
    expect(firstChild).toMatchSnapshot();
  });
});
