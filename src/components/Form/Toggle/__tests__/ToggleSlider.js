import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import theme from '../../../../theme/theme';
import ToggleSlider from '../ToggleSlider';

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <ToggleSlider h={100} disabled={false} />
    </ThemeProvider>
  );

describe('<ToggleSlider />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag with type checkbox', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
