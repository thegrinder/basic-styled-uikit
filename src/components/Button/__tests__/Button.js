import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../theme/theme';
import Button from '../Button';


const children = <span>children</span>;

const renderComponent = (props = {}) => render(
  <ThemeProvider theme={theme}>
    <Button {...props}>{children}</Button>
  </ThemeProvider>,
);

describe('<Button />', () => {
  afterEach(cleanup);

  it('should render correctly with default props and children', () => {
    const { container: { firstChild }, getByText } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const left = <span>left</span>;
    const right = <span>right</span>;
    const spinner = <span data-testid="spinner" />;
    const { container: { firstChild }, getByText, getByTestId } = renderComponent({
      btnType: 'danger',
      sizing: 's',
      left,
      right,
      submitting: true,
      renderSpinner: spinner,
    });

    const leftElement = getByText('left');
    const rightElement = getByText('right');
    const spinnerElement = getByTestId('spinner');
    const childrenElement = getByText('children');

    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(leftElement);
    expect(firstChild).toContainElement(rightElement);
    expect(firstChild).toContainElement(spinnerElement);
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <a> tag by default', () => {
    const { container: { firstChild } } = renderComponent({ as: 'a' });
    expect(firstChild.tagName).toEqual('A');
    expect(firstChild).toMatchSnapshot();
  });

  it('should render render <button> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('BUTTON');
    expect(firstChild).toMatchSnapshot();
  });
});
