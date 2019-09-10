import React from 'react';
import { render } from '../../../test-utils';
import Link from '../Link';

const children = 'children';

const renderComponent = (props = {}) =>
  render(<Link {...props}>{children}</Link>);

describe('<Link />', () => {
  it('should render correctly with default props and its children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByText } = renderComponent({
      sizing: 'xs',
      linktype: 'muted',
    });
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render <a> tag by default', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('A');
  });

  it('should render render <button> tag', () => {
    const { queryByText } = renderComponent({ as: 'button' });
    expect(queryByText(children).tagName).toEqual('BUTTON');
  });
});
