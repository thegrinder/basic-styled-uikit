import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import theme from '../../../../theme/theme';
import Textarea from '../Textarea';

const renderComponent = (props) =>
  render(
    <ThemeProvider theme={theme}>
      <Textarea {...props} />
    </ThemeProvider>
  );

describe('<Textarea />', () => {
  afterEach(cleanup);

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
    expect(firstChild).toMatchSnapshot();
  });
});
