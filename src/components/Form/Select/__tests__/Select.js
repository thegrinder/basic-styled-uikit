import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import theme from '../../../../theme/theme';
import Select from '../Select';

const option = <option>option</option>;
const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Select {...props}>{option}</Select>
    </ThemeProvider>
  );

describe('<Select />', () => {
  afterEach(cleanup);

  it('should render correctly with default props and its children', () => {
    const {
      container: { firstChild },
      getByText,
    } = renderComponent();
    const optionElement = getByText('option');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(optionElement);
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

  it('should render <select> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SELECT');
  });
});
