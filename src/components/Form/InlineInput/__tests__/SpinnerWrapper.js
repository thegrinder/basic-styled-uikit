import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../../theme/theme';
import SpinnerWrapper from '../SpinnerWrapper';

const children = <span>children</span>;

const renderComponent = () => render(
  <ThemeProvider theme={theme}>
    <SpinnerWrapper>{children}</SpinnerWrapper>
  </ThemeProvider>,
);

describe('<SpinnerWrapper />', () => {
  afterEach(cleanup);

  it('should render correctly with children', () => {
    const { container: { firstChild }, getByText } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <div> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('DIV');
  });
});
