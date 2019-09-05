import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../../theme/theme';
import StyledInlineInput from '../StyledInlineInput';

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <StyledInlineInput invalid={false} submitting />
    </ThemeProvider>
  );

describe('<InlineInput />', () => {
  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
  });

  it('should render <input> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('INPUT');
  });
});
