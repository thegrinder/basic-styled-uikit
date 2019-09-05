import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../../theme/theme';
import Radio from '../Radio';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Radio {...props} />
    </ThemeProvider>
  );

describe('<Radio />', () => {
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

  it('should render <input> tag with type radio', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('INPUT');
    expect(firstChild.type).toEqual('radio');
  });
});
