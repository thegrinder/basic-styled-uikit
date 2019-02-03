import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../theme/theme';
import StyledLink from '../StyledLink';


const children = 'children';

const renderComponent = () => render(
  <ThemeProvider theme={theme}>
    <StyledLink sizing="m" linktype="muted">
      {children}
    </StyledLink>
  </ThemeProvider>,
);

describe('<StyledLink />', () => {
  afterEach(cleanup);

  it('should render correctly with children', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <a> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('A');
    expect(firstChild).toMatchSnapshot();
  });
});
