import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';


import theme from '../../../../theme/theme';
import StyledTextarea from '../StyledTextarea';


const renderComponent = props => render(
  <ThemeProvider theme={theme}>
    <StyledTextarea invalid={true} {...props} />
  </ThemeProvider>,
);

describe('<Textarea />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <textarea> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('TEXTAREA');
    expect(firstChild).toMatchSnapshot();
  });
});
