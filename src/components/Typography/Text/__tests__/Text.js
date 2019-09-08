import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import TypographyProvider from '../../TypographyProvider';
import Text from '../Text';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <Text {...props}>{children}</Text>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<Text />', () => {
  it('should render correctly with default props', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByText } = renderComponent({
      sizing: 'xs',
      color: 'primary',
      marginBottom: true,
      ignoreBackground: true,
    });
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render <span> tag by default', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('SPAN');
  });

  it('should render render <p> tag', () => {
    const { queryByText } = renderComponent({ as: 'p' });
    expect(queryByText(children).tagName).toEqual('P');
  });
});
