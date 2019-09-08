import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../theme/theme';
import StyledButton from '../StyledButton';

const children = <span>children</span>;

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <StyledButton btntype="danger" sizing="s" {...props}>
        {children}
      </StyledButton>
    </ThemeProvider>
  );

describe('<StyledButton />', () => {
  it('should render correctly with default props and children', () => {
    const { getByText } = renderComponent();
    expect(getByText('children')).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { getByText } = renderComponent({
      sizing: 'm',
    });
    expect(getByText('children')).toBeTruthy();
  });

  it('should render <button> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('BUTTON');
  });
});
