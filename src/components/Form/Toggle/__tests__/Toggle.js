import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../../theme/theme';
import Toggle from '../Toggle';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Toggle onChange={() => {}} {...props} />
    </ThemeProvider>
  );

describe('<Toggle />', () => {
  it('should render correctly with default props', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const {
      container: { firstChild },
    } = renderComponent({
      h: 100,
      disabled: true,
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });
});
