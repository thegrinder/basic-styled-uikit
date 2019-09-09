import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../Mode';
import ColorBoxProvider from '../ColorBoxProvider';
import ColorBox from '../ColorBox';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <ColorBoxProvider>
        <ColorBox {...props}>{children}</ColorBox>
      </ColorBoxProvider>
    </ModeProvider>
  );

describe('<ColorBox />', () => {
  it('should render correctly with default props and children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByText } = renderComponent({
      bgColor: 'primary',
      borderColor: 'success',
    });
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render <div> tag', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('DIV');
  });
});
