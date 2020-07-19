import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';


import theme from '../../../../theme/theme';
import Checkbox from '../Checkbox';


const renderComponent = (props = {}) => render(
  <ThemeProvider theme={theme}>
    <Checkbox {...props} />
  </ThemeProvider>,
);

describe('<Checkbox />', () => {
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

  it('should render <input> tag with type checkbox', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('INPUT');
    expect(firstChild.type).toEqual('checkbox');
    expect(firstChild).toMatchSnapshot();
  });
});
