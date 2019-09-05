import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../../theme/theme';
import StyledSelect from '../StyledSelect';

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <StyledSelect invalid={false} />
    </ThemeProvider>
  );

describe('<StyledSelect />', () => {
  it('should render correctly with default props and its children', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <select> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SELECT');
  });
});
