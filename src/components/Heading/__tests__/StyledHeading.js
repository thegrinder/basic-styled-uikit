import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import theme from '../../../theme/theme';
import StyledHeading from '../StyledHeading';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <StyledHeading
        sizing="h1"
        color="primary"
        marginBottom
        emphasis="high"
        {...props}
      >
        {children}
      </StyledHeading>
    </ThemeProvider>
  );

describe('<StyledHeading />', () => {
  afterEach(cleanup);

  it('should render correctly with children', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });
});
