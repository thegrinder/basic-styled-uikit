import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../../theme/theme';
import Textarea from '../Textarea';

const renderComponent = props =>
  render(
    <ThemeProvider theme={theme}>
      <Textarea {...props} />
    </ThemeProvider>
  );

describe('<Textarea />', () => {
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
      invalid: true,
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <textarea> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('TEXTAREA');
  });
});
