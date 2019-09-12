import React from 'react';
import { render } from '../../../test-utils';
import Box from '../Box';

const children = 'children';

const renderComponent = (props = {}) =>
  render(<Box {...props}>{children}</Box>);

describe('<Box />', () => {
  it('should render correctly with default props and children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render <div> tag', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('DIV');
  });
});
