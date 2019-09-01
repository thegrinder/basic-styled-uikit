import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import theme from '../../../../theme/theme';
import StyledCheckbox from '../StyledCheckbox';

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <StyledCheckbox invalid={false} />
    </ThemeProvider>
  );

describe('<StyledCheckbox />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <input> tag with type checkbox', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('INPUT');
    expect(firstChild.type).toEqual('checkbox');
  });
});
