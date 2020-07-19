import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';


import theme from '../../../theme/theme';
import StyledButton from '../StyledButton';


const children = <span>children</span>;

const renderComponent = (props = {}) => render(
  <ThemeProvider theme={theme}>
    <StyledButton
      btntype="danger"
      sizing="s"
      {...props}
    >
      {children}
    </StyledButton>
  </ThemeProvider>,
);

describe('<StyledButton />', () => {
  afterEach(cleanup);

  it('should render correctly with default props and children', () => {
    const { container: { firstChild }, getByText } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const { container: { firstChild }, getByText } = renderComponent({
      sizing: 'm',
    });
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <button> tag by default', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('BUTTON');
    expect(firstChild).toMatchSnapshot();
  });
});
