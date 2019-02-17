import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../../theme/theme';
import StyledInput from '../StyledInput';


const renderComponent = () => render(
  <ThemeProvider theme={theme}>
    <StyledInput invalid={false} />
  </ThemeProvider>,
);

describe('<Input />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <input> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('INPUT');
    expect(firstChild).toMatchSnapshot();
  });
});
