import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../theme/theme';
import StyledText from '../StyledText';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <StyledText
        color="primary"
        sizing="s"
        marginBottom={false}
        emphasis="high"
        ignoreBackground={false}
        {...props}
      >
        {children}
      </StyledText>
    </ThemeProvider>
  );

describe('<StyledText />', () => {
  it('should render correctly with children', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
