import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../theme/theme';
import Link from '../Link';


const children = 'children';

const renderComponent = props => render(
  <ThemeProvider theme={theme}>
    <Link {...props}>{children}</Link>
  </ThemeProvider>,
);

describe('<Link />', () => {
  afterEach(cleanup);

  it('should render correctly with default props', () => {
    const { getByText } = renderComponent();
    const component = getByText(children);
    expect(component).toBeDefined();
    expect(component).toHaveTextContent(children);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const { getByText } = renderComponent({
      size: 'xs',
      linktype: 'muted',
    });
    const component = getByText(children);
    expect(component).toBeDefined();
    expect(component).toHaveTextContent(children);
    expect(component).toMatchSnapshot();
  });

  it('should render <a> tag by default', () => {
    const { getByText } = renderComponent();
    const component = getByText(children);
    expect(component.tagName).toEqual('A');
    expect(component).toMatchSnapshot();
  });

  it('should render render <button> tag', () => {
    const { getByText } = renderComponent({ as: 'button' });
    const component = getByText(children);
    expect(component.tagName).toEqual('BUTTON');
    expect(component).toMatchSnapshot();
  });
});
