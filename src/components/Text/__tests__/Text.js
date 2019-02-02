import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../theme/theme';
import Text from '../Text';


const children = 'children';

const renderComponent = props => render(
  <ThemeProvider theme={theme}>
    <Text {...props}>{children}</Text>
  </ThemeProvider>,
);

describe('<Text />', () => {
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
      sizing: 'xs',
      color: 'primary',
      marginBottom: true,
    });
    const component = getByText(children);
    expect(component).toBeDefined();
    expect(component).toHaveTextContent(children);
    expect(component).toMatchSnapshot();
  });

  it('should render <span> tag by default', () => {
    const { getByText } = renderComponent();
    const component = getByText(children);
    expect(component.tagName).toEqual('SPAN');
    expect(component).toMatchSnapshot();
  });

  it('should render render <p> tag', () => {
    const { getByText } = renderComponent({ as: 'p' });
    const component = getByText(children);
    expect(component.tagName).toEqual('P');
    expect(component).toMatchSnapshot();
  });
});
