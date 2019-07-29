import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';


import theme from '../../../../theme/theme';
import InlineInput from '../InlineInput';


const renderComponent = (props = {}) => render(
  <ThemeProvider theme={theme}>
    <InlineInput {...props} />
  </ThemeProvider>,
);

describe('<InlineInput />', () => {
  afterEach(cleanup);

  it('should render correctly with default props', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const spinner = <span data-testid="spinner" />;
    const { container: { firstChild }, getByTestId } = renderComponent({
      invalid: false,
      submitting: true,
      renderSpinner: spinner,
    });
    const spinnerElement = getByTestId('spinner');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(spinnerElement);
  });
});
