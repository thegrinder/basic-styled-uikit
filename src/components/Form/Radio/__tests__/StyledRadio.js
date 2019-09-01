import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import theme from '../../../../theme/theme';
import StyledRadio from '../StyledRadio';

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <StyledRadio invalid={false} />
    </ThemeProvider>
  );

describe('<StyledRadio />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <input> tag with type radio', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('INPUT');
    expect(firstChild.type).toEqual('radio');
  });
});
