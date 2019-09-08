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
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const {
      container: { firstChild },
    } = renderComponent({
      sizing: 'xs',
      color: 'primary',
      marginBottom: true,
      ignoreBackground: true,
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SPAN');
  });

  it('should render render <p> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent({ as: 'p' });
    expect(firstChild.tagName).toEqual('P');
  });
});
