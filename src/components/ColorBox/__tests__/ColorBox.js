import React from 'react';
import { render } from '../../../test-utils';
import ColorBox from '../ColorBox';

const children = 'children';

const renderComponent = (props = {}) =>
  render(<ColorBox {...props}>{children}</ColorBox>);

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
